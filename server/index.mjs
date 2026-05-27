import { createServer } from 'node:http';
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';
import postgres from 'postgres';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = resolve(__dirname, '..');

loadEnvFile(resolve(ROOT_DIR, '.env'));
loadEnvFile(resolve(ROOT_DIR, '.env.local'));

const PORT = Number(process.env.PORT || 3001);
const DATA_DIR = resolve(__dirname, 'data');
const DB_PATH = resolve(DATA_DIR, 'db.json');
const DATABASE_URL = process.env.DATABASE_URL || process.env.SUPABASE_DB_URL || '';
const SUPABASE_POOL_MODE = process.env.SUPABASE_POOL_MODE || inferSupabasePoolMode(DATABASE_URL);
const SESSION_TTL = 1000 * 60 * 60 * 24 * 7;
const CODE_TTL = 1000 * 60 * 10;

const RESEND_API_BASE = 'https://api.resend.com';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || '';
const RESEND_FROM_NAME = process.env.RESEND_FROM_NAME || 'Zhidao';
const RESEND_AUDIENCE_NAME = process.env.RESEND_AUDIENCE_NAME || 'Zhidao';
const EMAIL_DEBUG_EXPOSE_CODE = /^(1|true|yes)$/i.test(process.env.EMAIL_DEBUG_EXPOSE_CODE || '');

const allowedOrigins = new Set([
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
]);

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return;

  const content = readFileSync(filePath, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const separatorIndex = line.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

function json(res, status, payload, origin) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
  });
  res.end(JSON.stringify(payload));
}

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function getBearerToken(req) {
  const auth = req.headers.authorization || '';
  return auth.startsWith('Bearer ') ? auth.slice(7) : '';
}

function randomToken() {
  return crypto.randomBytes(24).toString('hex');
}

function randomCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function parseBody(req) {
  return new Promise((resolveBody, rejectBody) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
    });
    req.on('end', () => {
      try {
        resolveBody(raw ? JSON.parse(raw) : {});
      } catch (error) {
        rejectBody(error);
      }
    });
    req.on('error', rejectBody);
  });
}

function sanitizeUser(user) {
  return {
    email: user.email,
    nickname: user.nickname,
    avatar: user.avatar,
    isLoggedIn: true,
    createdAt: user.createdAt,
    careerDirection: user.careerDirection,
    hasSelectedCareer: user.hasSelectedCareer,
  };
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateRankingType(type) {
  return ['power', 'attack', 'defense', 'hp', 'equipment'].includes(type);
}

function isSupabaseConnectionString(connectionString) {
  return /supabase\.co|pooler\.supabase\.com/i.test(connectionString);
}

function inferSupabasePoolMode(connectionString) {
  if (!isSupabaseConnectionString(connectionString)) return '';

  if (/:(6543)(\/|\?|$)/.test(connectionString)) {
    return 'transaction';
  }

  if (/pooler\.supabase\.com/i.test(connectionString) && /:(5432)(\/|\?|$)/.test(connectionString)) {
    return 'session';
  }

  return 'direct';
}

function hasResendConfig() {
  const hasApiKey = Boolean(RESEND_API_KEY) && RESEND_API_KEY !== 'your_resend_key' && RESEND_API_KEY.startsWith('re_');
  const hasSenderEmail = Boolean(RESEND_FROM_EMAIL) && RESEND_FROM_EMAIL !== 'your_sender_email' && RESEND_FROM_EMAIL.includes('@');

  return hasApiKey && hasSenderEmail;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function mapUserRow(row) {
  if (!row) return null;

  return {
    id: row.id,
    email: row.email,
    nickname: row.nickname || '',
    avatar: row.avatar || '',
    createdAt: Number(row.created_at ?? row.createdAt ?? Date.now()),
    careerDirection: row.career_direction ?? row.careerDirection ?? '',
    hasSelectedCareer: Boolean(row.has_selected_career ?? row.hasSelectedCareer),
  };
}

function normalizeSavedState(user, state) {
  const profile = state?.user || {};
  const normalizedState = {
    ...state,
    user: {
      ...profile,
      email: user.email,
      nickname: profile.nickname || user.nickname || '',
      avatar: profile.avatar || user.avatar || '',
      isLoggedIn: true,
      createdAt: user.createdAt,
      careerDirection: profile.careerDirection || user.careerDirection || '',
      hasSelectedCareer: Boolean(profile.hasSelectedCareer ?? user.hasSelectedCareer),
    },
  };

  return normalizedState;
}

function ensureJsonDb() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!existsSync(DB_PATH)) {
    writeFileSync(
      DB_PATH,
      JSON.stringify(
        {
          users: [],
          verificationCodes: [],
          sessions: [],
          gameStates: {},
          leaderboard: {},
        },
        null,
        2,
      ),
      'utf8',
    );
  }
}

function readJsonDb() {
  ensureJsonDb();
  return JSON.parse(readFileSync(DB_PATH, 'utf8'));
}

function writeJsonDb(db) {
  writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf8');
}

function createJsonStorage() {
  return {
    kind: 'json',
    async init() {
      ensureJsonDb();
    },
    async close() {
      return undefined;
    },
    async saveVerificationCode(email, code, expiresAt) {
      const db = readJsonDb();
      db.verificationCodes = db.verificationCodes.filter(item => item.email !== email);
      db.verificationCodes.push({
        email,
        code,
        expiresAt,
        createdAt: Date.now(),
      });
      writeJsonDb(db);
    },
    async getVerificationCode(email) {
      const db = readJsonDb();
      return db.verificationCodes.find(item => item.email === email) || null;
    },
    async deleteVerificationCode(email) {
      const db = readJsonDb();
      db.verificationCodes = db.verificationCodes.filter(item => item.email !== email);
      writeJsonDb(db);
    },
    async findUserByEmail(email) {
      const db = readJsonDb();
      const user = db.users.find(item => item.email === email);
      return user ? mapUserRow(user) : null;
    },
    async createUser(email) {
      const db = readJsonDb();
      const user = {
        id: randomToken(),
        email,
        nickname: '',
        avatar: '',
        created_at: Date.now(),
        career_direction: '',
        has_selected_career: false,
      };
      db.users.push(user);
      writeJsonDb(db);
      return mapUserRow(user);
    },
    async replaceSession(userId, token, expiresAt) {
      const db = readJsonDb();
      db.sessions = db.sessions.filter(item => item.userId !== userId && item.expiresAt > Date.now());
      db.sessions.push({
        token,
        userId,
        expiresAt,
      });
      writeJsonDb(db);
    },
    async getSessionUser(token) {
      const db = readJsonDb();
      const now = Date.now();
      db.sessions = db.sessions.filter(item => item.expiresAt > now);
      const session = db.sessions.find(item => item.token === token);
      if (!session) {
        writeJsonDb(db);
        return null;
      }

      const user = db.users.find(item => item.id === session.userId);
      writeJsonDb(db);
      return user ? mapUserRow(user) : null;
    },
    async getBootstrapSession(token) {
      const user = await this.getSessionUser(token);
      if (!user) return null;

      return {
        user,
        state: await this.getGameState(user.id),
      };
    },
    async getGameState(userId) {
      const db = readJsonDb();
      return db.gameStates[userId] || null;
    },
    async saveGameState(user, state) {
      const db = readJsonDb();
      const normalizedState = normalizeSavedState(user, state);
      const userRecord = db.users.find(item => item.id === user.id);

      if (userRecord) {
        userRecord.nickname = normalizedState.user.nickname;
        userRecord.avatar = normalizedState.user.avatar;
        userRecord.career_direction = normalizedState.user.careerDirection;
        userRecord.has_selected_career = normalizedState.user.hasSelectedCareer;
      }

      db.gameStates[user.id] = normalizedState;
      writeJsonDb(db);
      return normalizedState;
    },
    async saveLeaderboardEntry(user, payload) {
      const db = readJsonDb();
      db.leaderboard[user.id] = {
        userId: user.id,
        nickname: payload.nickname || user.nickname,
        avatar: payload.avatar || user.avatar,
        level: Number(payload.level || 0),
        power: Number(payload.power || 0),
        attack: Number(payload.attack || 0),
        defense: Number(payload.defense || 0),
        hp: Number(payload.hp || 0),
        equipmentCount: Number(payload.equipmentCount || 0),
        updatedAt: Date.now(),
      };
      writeJsonDb(db);
    },
    async getRankings(type, currentUserId) {
      const db = readJsonDb();
      const scoreFieldMap = {
        power: 'power',
        attack: 'attack',
        defense: 'defense',
        hp: 'hp',
        equipment: 'equipmentCount',
      };

      const scoreField = scoreFieldMap[type];
      const rankings = Object.values(db.leaderboard)
        .map(entry => ({
          nickname: entry.nickname,
          avatar: entry.avatar,
          level: entry.level,
          equipmentCount: entry.equipmentCount,
          score: entry[scoreField] || 0,
          userId: entry.userId,
        }))
        .sort((a, b) => b.score - a.score || b.level - a.level)
        .map((entry, index) => ({
          rank: index + 1,
          nickname: entry.nickname,
          avatar: entry.avatar,
          level: entry.level,
          equipmentCount: entry.equipmentCount,
          score: entry.score,
          isCurrentUser: entry.userId === currentUserId,
        }));

      const myEntry = rankings.find(item => item.isCurrentUser);
      return { rankings, myRank: myEntry ? myEntry.rank : null };
    },
  };
}

function createPostgresStorage() {
  const sql = postgres(DATABASE_URL, {
    max: 5,
    idle_timeout: 20,
    connect_timeout: 15,
    prepare: SUPABASE_POOL_MODE === 'transaction' ? false : undefined,
    ssl: isSupabaseConnectionString(DATABASE_URL) ? 'require' : undefined,
  });

  return {
    kind: 'postgres',
    async init() {
      await sql`
        create table if not exists users (
          id text primary key,
          email text not null unique,
          nickname text not null default '',
          avatar text not null default '',
          created_at bigint not null,
          career_direction text not null default '',
          has_selected_career boolean not null default false
        )
      `;

      await sql`
        create table if not exists verification_codes (
          email text primary key,
          code text not null,
          expires_at bigint not null,
          created_at bigint not null
        )
      `;

      await sql`
        create table if not exists sessions (
          token text primary key,
          user_id text not null references users(id) on delete cascade,
          expires_at bigint not null
        )
      `;

      await sql`
        create table if not exists game_saves (
          user_id text primary key references users(id) on delete cascade,
          state_json jsonb not null,
          updated_at bigint not null
        )
      `;

      await sql`
        create table if not exists leaderboard_entries (
          user_id text primary key references users(id) on delete cascade,
          nickname text not null default '',
          avatar text not null default '',
          level integer not null default 0,
          power integer not null default 0,
          attack integer not null default 0,
          defense integer not null default 0,
          hp integer not null default 0,
          equipment_count integer not null default 0,
          updated_at bigint not null
        )
      `;

      await sql`create index if not exists idx_sessions_expires_at on sessions (expires_at)`;
      await sql`create index if not exists idx_verification_codes_expires_at on verification_codes (expires_at)`;
      await sql`create index if not exists idx_leaderboard_updated_at on leaderboard_entries (updated_at desc)`;
    },
    async close() {
      await sql.end({ timeout: 5 });
    },
    async saveVerificationCode(email, code, expiresAt) {
      await sql`
        insert into verification_codes ${sql({
          email,
          code,
          expires_at: expiresAt,
          created_at: Date.now(),
        })}
        on conflict (email) do update
        set
          code = excluded.code,
          expires_at = excluded.expires_at,
          created_at = excluded.created_at
      `;
    },
    async getVerificationCode(email) {
      const [row] = await sql`
        select email, code, expires_at
        from verification_codes
        where email = ${email}
        limit 1
      `;

      if (!row) return null;

      return {
        email: row.email,
        code: row.code,
        expiresAt: Number(row.expires_at),
      };
    },
    async deleteVerificationCode(email) {
      await sql`delete from verification_codes where email = ${email}`;
    },
    async findUserByEmail(email) {
      const [row] = await sql`
        select
          id,
          email,
          nickname,
          avatar,
          created_at,
          career_direction,
          has_selected_career
        from users
        where email = ${email}
        limit 1
      `;

      return mapUserRow(row);
    },
    async createUser(email) {
      const [row] = await sql`
        insert into users ${sql({
          id: randomToken(),
          email,
          nickname: '',
          avatar: '',
          created_at: Date.now(),
          career_direction: '',
          has_selected_career: false,
        })}
        returning
          id,
          email,
          nickname,
          avatar,
          created_at,
          career_direction,
          has_selected_career
      `;

      return mapUserRow(row);
    },
    async replaceSession(userId, token, expiresAt) {
      await sql.begin(async trx => {
        await trx`delete from sessions where user_id = ${userId}`;
        await trx`
          insert into sessions ${trx({
            token,
            user_id: userId,
            expires_at: expiresAt,
          })}
        `;
      });
    },
    async getSessionUser(token) {
      const [row] = await sql`
        select
          u.id,
          u.email,
          u.nickname,
          u.avatar,
          u.created_at,
          u.career_direction,
          u.has_selected_career
        from sessions s
        join users u on u.id = s.user_id
        where s.token = ${token}
          and s.expires_at > ${Date.now()}
        limit 1
      `;

      return mapUserRow(row);
    },
    async getBootstrapSession(token) {
      const [row] = await sql`
        select
          u.id,
          u.email,
          u.nickname,
          u.avatar,
          u.created_at,
          u.career_direction,
          u.has_selected_career,
          gs.state_json
        from sessions s
        join users u on u.id = s.user_id
        left join game_saves gs on gs.user_id = u.id
        where s.token = ${token}
          and s.expires_at > ${Date.now()}
        limit 1
      `;

      if (!row) return null;

      return {
        user: mapUserRow(row),
        state: typeof row.state_json === 'string'
          ? JSON.parse(row.state_json)
          : (row.state_json ?? null),
      };
    },
    async getGameState(userId) {
      const [row] = await sql`
        select state_json
        from game_saves
        where user_id = ${userId}
        limit 1
      `;

      if (!row) return null;
      if (typeof row.state_json === 'string') {
        return JSON.parse(row.state_json);
      }

      return row.state_json ?? null;
    },
    async saveGameState(user, state) {
      const normalizedState = normalizeSavedState(user, state);
      const updatedAt = Date.now();

      await sql.begin(async trx => {
        await trx`
          update users
          set
            nickname = ${normalizedState.user.nickname},
            avatar = ${normalizedState.user.avatar},
            career_direction = ${normalizedState.user.careerDirection || ''},
            has_selected_career = ${Boolean(normalizedState.user.hasSelectedCareer)}
          where id = ${user.id}
        `;

        await trx`
          insert into game_saves (
            user_id,
            state_json,
            updated_at
          )
          values (
            ${user.id},
            ${JSON.stringify(normalizedState)}::jsonb,
            ${updatedAt}
          )
          on conflict (user_id) do update
          set
            state_json = excluded.state_json,
            updated_at = excluded.updated_at
        `;
      });

      return normalizedState;
    },
    async saveLeaderboardEntry(user, payload) {
      await sql`
        insert into leaderboard_entries ${sql({
          user_id: user.id,
          nickname: payload.nickname || user.nickname || '',
          avatar: payload.avatar || user.avatar || '',
          level: Number(payload.level || 0),
          power: Number(payload.power || 0),
          attack: Number(payload.attack || 0),
          defense: Number(payload.defense || 0),
          hp: Number(payload.hp || 0),
          equipment_count: Number(payload.equipmentCount || 0),
          updated_at: Date.now(),
        })}
        on conflict (user_id) do update
        set
          nickname = excluded.nickname,
          avatar = excluded.avatar,
          level = excluded.level,
          power = excluded.power,
          attack = excluded.attack,
          defense = excluded.defense,
          hp = excluded.hp,
          equipment_count = excluded.equipment_count,
          updated_at = excluded.updated_at
      `;
    },
    async getRankings(type, currentUserId) {
      const scoreFieldMap = {
        power: 'power',
        attack: 'attack',
        defense: 'defense',
        hp: 'hp',
        equipment: 'equipment_count',
      };

      const scoreColumn = scoreFieldMap[type];
      const [myRankRow, rankingRows] = await Promise.all([
        sql`
          with ranked as (
            select
              user_id,
              row_number() over (
                order by ${sql(scoreColumn)} desc, level desc, updated_at asc
              ) as rank
            from leaderboard_entries
          )
          select rank
          from ranked
          where user_id = ${currentUserId}
          limit 1
        `,
        sql`
          with ranked as (
            select
              user_id,
              nickname,
              avatar,
              level,
              equipment_count,
              ${sql(scoreColumn)} as score,
              row_number() over (
                order by ${sql(scoreColumn)} desc, level desc, updated_at asc
              ) as rank
            from leaderboard_entries
          )
          select
            user_id,
            nickname,
            avatar,
            level,
            equipment_count,
            score,
            rank
          from ranked
          where rank <= 100
          order by rank asc
        `,
      ]);

      return {
        rankings: rankingRows.map(row => ({
          rank: Number(row.rank),
          nickname: row.nickname,
          avatar: row.avatar,
          level: Number(row.level),
          equipmentCount: Number(row.equipment_count),
          score: Number(row.score),
          isCurrentUser: row.user_id === currentUserId,
        })),
        myRank: myRankRow?.[0] ? Number(myRankRow[0].rank) : null,
      };
    },
  };
}

const storage = DATABASE_URL ? createPostgresStorage() : createJsonStorage();
await storage.init();

async function sendVerificationEmail(email, code) {
  const from = RESEND_FROM_NAME
    ? `${RESEND_FROM_NAME} <${RESEND_FROM_EMAIL}>`
    : RESEND_FROM_EMAIL;

  const html = `
    <div style="font-family:Arial,'Microsoft YaHei',sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#f6f1e7;color:#17380f;">
      <div style="border:6px solid #17380f;background:#9bbc0f;padding:24px;">
        <div style="font-size:24px;font-weight:700;margin-bottom:12px;">${escapeHtml(RESEND_AUDIENCE_NAME)} verification code</div>
        <div style="font-size:14px;line-height:1.8;margin-bottom:16px;">You are signing in to ${escapeHtml(RESEND_AUDIENCE_NAME)}. This code will expire in 10 minutes.</div>
        <div style="display:inline-block;border:4px solid #17380f;background:#d5ff66;padding:12px 18px;font-size:28px;font-weight:700;letter-spacing:6px;">
          ${escapeHtml(code)}
        </div>
        <div style="margin-top:18px;font-size:13px;line-height:1.8;color:#29461f;">
          If this was not you, you can ignore this email.
        </div>
      </div>
    </div>
  `;

  const response = await fetch(`${RESEND_API_BASE}/emails`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': `verify-${email}-${code}`,
      'User-Agent': 'zhidao-game-server/1.0',
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: `${RESEND_AUDIENCE_NAME} verification code`,
      html,
      text: `${RESEND_AUDIENCE_NAME} verification code: ${code}. It expires in 10 minutes.`,
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = payload?.message || payload?.error || `Resend request failed: ${response.status}`;
    throw new Error(message);
  }

  return payload;
}

async function getSession(req) {
  const token = getBearerToken(req);
  if (!token) return null;

  const user = await storage.getSessionUser(token);
  if (!user) return null;

  return { token, user };
}

const server = createServer(async (req, res) => {
  const origin = req.headers.origin;
  const allowOrigin = origin && allowedOrigins.has(origin) ? origin : undefined;

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': allowOrigin || '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
    });
    res.end();
    return;
  }

  const url = new URL(req.url || '/', `http://${req.headers.host}`);
  const pathname = url.pathname;

  try {
    if (req.method === 'POST' && pathname === '/api/auth/email/code') {
      const body = await parseBody(req);
      const email = normalizeEmail(body.email);
      if (!validateEmail(email)) {
        json(res, 400, { message: 'Invalid email address' }, allowOrigin);
        return;
      }

      const code = randomCode();
      const expiresAt = Date.now() + CODE_TTL;

      if (hasResendConfig()) {
        let sendResult;
        try {
          sendResult = await sendVerificationEmail(email, code);
        } catch (error) {
          console.error(`[auth] resend failed for ${email}`, error);
          json(res, 502, {
            message: 'Verification email could not be delivered right now',
          }, allowOrigin);
          return;
        }

        await storage.saveVerificationCode(email, code, expiresAt);
        console.log(`[auth] resend verification email sent to ${email}`);
        if (EMAIL_DEBUG_EXPOSE_CODE) {
          console.log(`[auth] debug verification code for ${email}: ${code}`);
        }
        json(res, 200, {
          message: 'Verification code sent',
          delivery: 'resend',
          emailId: sendResult?.id,
          ...(EMAIL_DEBUG_EXPOSE_CODE ? { devCode: code } : {}),
        }, allowOrigin);
        return;
      }

      await storage.saveVerificationCode(email, code, expiresAt);
      console.log(`[auth] fallback verification code for ${email}: ${code}`);
      json(res, 200, {
        message: 'Verification code generated in development fallback mode',
        delivery: 'dev',
        devCode: code,
      }, allowOrigin);
      return;
    }

    if (req.method === 'POST' && pathname === '/api/auth/email/login') {
      const body = await parseBody(req);
      const email = normalizeEmail(body.email);
      const code = String(body.code || '').trim();

      if (!validateEmail(email)) {
        json(res, 400, { message: 'Invalid email address' }, allowOrigin);
        return;
      }

      const record = await storage.getVerificationCode(email);
      if (!record || record.expiresAt < Date.now() || record.code !== code) {
        json(res, 401, { message: 'Verification code is invalid or expired' }, allowOrigin);
        return;
      }

      let user = await storage.findUserByEmail(email);
      if (!user) {
        user = await storage.createUser(email);
      }

      const token = randomToken();
      await Promise.all([
        storage.replaceSession(user.id, token, Date.now() + SESSION_TTL),
        storage.deleteVerificationCode(email),
      ]);

      json(res, 200, {
        accessToken: token,
        user: sanitizeUser(user),
      }, allowOrigin);
      return;
    }

    if (req.method === 'GET' && pathname === '/api/auth/bootstrap') {
      const token = getBearerToken(req);
      if (!token) {
        json(res, 401, { message: 'Session expired, please sign in again' }, allowOrigin);
        return;
      }

      const bootstrap = await storage.getBootstrapSession(token);
      if (!bootstrap?.user) {
        json(res, 401, { message: 'Session expired, please sign in again' }, allowOrigin);
        return;
      }

      json(res, 200, {
        user: sanitizeUser(bootstrap.user),
        state: bootstrap.state,
      }, allowOrigin);
      return;
    }

    if (pathname.startsWith('/api/')) {
      const auth = await getSession(req);
      if (!auth) {
        json(res, 401, { message: 'Session expired, please sign in again' }, allowOrigin);
        return;
      }

      const { user } = auth;

      if (req.method === 'GET' && pathname === '/api/auth/me') {
        json(res, 200, { user: sanitizeUser(user) }, allowOrigin);
        return;
      }

      if (req.method === 'GET' && pathname === '/api/game/state') {
        json(res, 200, {
          state: await storage.getGameState(user.id),
        }, allowOrigin);
        return;
      }

      if (req.method === 'PUT' && pathname === '/api/game/state') {
        const body = await parseBody(req);
        const state = body.state;
        if (!state || typeof state !== 'object') {
          json(res, 400, { message: 'Game state is required' }, allowOrigin);
          return;
        }

        const normalizedState = await storage.saveGameState(user, state);
        json(res, 200, { updatedAt: Date.now(), state: normalizedState }, allowOrigin);
        return;
      }

      if (req.method === 'POST' && pathname === '/api/rankings/submit') {
        const body = await parseBody(req);
        await storage.saveLeaderboardEntry(user, body);
        json(res, 200, { ok: true, updatedAt: Date.now() }, allowOrigin);
        return;
      }

      if (req.method === 'GET' && pathname === '/api/rankings') {
        const type = String(url.searchParams.get('type') || 'power');
        if (!validateRankingType(type)) {
          json(res, 400, { message: 'Invalid ranking type' }, allowOrigin);
          return;
        }

        json(res, 200, await storage.getRankings(type, user.id), allowOrigin);
        return;
      }
    }

    json(res, 404, { message: 'API route not found' }, allowOrigin);
  } catch (error) {
    console.error(error);
    json(res, 500, { message: 'Internal server error' }, allowOrigin);
  }
});

const shutdownSignals = ['SIGINT', 'SIGTERM'];
for (const signal of shutdownSignals) {
  process.on(signal, () => {
    server.close(async () => {
      await storage.close().catch(error => {
        console.error('[api] storage close failed', error);
      });
      process.exit(0);
    });
  });
}

server.listen(PORT, () => {
  console.log(`[api] server running at http://localhost:${PORT}`);
  console.log(`[api] storage backend: ${storage.kind === 'postgres' ? 'postgres' : 'json-fallback'}`);
  if (storage.kind === 'postgres') {
    console.log('[api] postgres persistence enabled');
    if (isSupabaseConnectionString(DATABASE_URL)) {
      console.log(`[api] supabase connection mode: ${SUPABASE_POOL_MODE || 'unknown'}`);
      if (SUPABASE_POOL_MODE === 'transaction') {
        console.log('[api] prepared statements disabled for Supabase transaction pooler');
      }
    }
  } else {
    console.log(`[api] using local JSON storage at ${DB_PATH}`);
  }

  if (hasResendConfig()) {
    console.log(`[api] resend enabled with sender ${RESEND_FROM_EMAIL}`);
    if (EMAIL_DEBUG_EXPOSE_CODE) {
      console.log('[api] email debug expose code is enabled');
    }
  } else {
    console.log('[api] resend not configured, verification emails will fall back to dev mode');
  }
});
