import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import postgres from 'postgres';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = resolve(__dirname, '..');

loadEnvFile(resolve(ROOT_DIR, '.env'));
loadEnvFile(resolve(ROOT_DIR, '.env.local'));

const DATABASE_URL = process.env.DATABASE_URL || process.env.SUPABASE_DB_URL || '';
const SUPABASE_POOL_MODE = process.env.SUPABASE_POOL_MODE || inferSupabasePoolMode(DATABASE_URL);
const sourceArg = process.argv[2];
const SOURCE_PATH = sourceArg ? resolve(ROOT_DIR, sourceArg) : resolve(__dirname, 'data', 'db.json');

if (!DATABASE_URL) {
  console.error('[migrate] DATABASE_URL or SUPABASE_DB_URL is required');
  process.exit(1);
}

if (!existsSync(SOURCE_PATH)) {
  console.error(`[migrate] source file not found: ${SOURCE_PATH}`);
  process.exit(1);
}

const sql = postgres(DATABASE_URL, {
  max: 1,
  idle_timeout: 20,
  connect_timeout: 15,
  prepare: SUPABASE_POOL_MODE === 'transaction' ? false : undefined,
  ssl: isSupabaseConnectionString(DATABASE_URL) ? 'require' : undefined,
});

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

function normalizeBoolean(value) {
  return Boolean(value);
}

function normalizeUser(user) {
  return {
    id: String(user.id),
    email: String(user.email || '').trim().toLowerCase(),
    nickname: String(user.nickname || ''),
    avatar: String(user.avatar || ''),
    created_at: Number(user.created_at ?? user.createdAt ?? Date.now()),
    career_direction: String(user.career_direction ?? user.careerDirection ?? ''),
    has_selected_career: normalizeBoolean(user.has_selected_career ?? user.hasSelectedCareer),
  };
}

function normalizeState(user, state) {
  const profile = state?.user || {};

  return {
    ...state,
    user: {
      ...profile,
      email: user.email,
      nickname: profile.nickname || user.nickname,
      avatar: profile.avatar || user.avatar,
      isLoggedIn: true,
      createdAt: user.created_at,
      careerDirection: profile.careerDirection || user.career_direction || '',
      hasSelectedCareer: normalizeBoolean(profile.hasSelectedCareer ?? user.has_selected_career),
    },
  };
}

function normalizeLeaderboardEntry(userId, entry) {
  return {
    user_id: String(entry.userId || userId),
    nickname: String(entry.nickname || ''),
    avatar: String(entry.avatar || ''),
    level: Number(entry.level || 0),
    power: Number(entry.power || 0),
    attack: Number(entry.attack || 0),
    defense: Number(entry.defense || 0),
    hp: Number(entry.hp || 0),
    equipment_count: Number(entry.equipmentCount || entry.equipment_count || 0),
    updated_at: Number(entry.updatedAt || entry.updated_at || Date.now()),
  };
}

async function ensureTables() {
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
}

async function run() {
  const raw = JSON.parse(readFileSync(SOURCE_PATH, 'utf8'));
  const users = Array.isArray(raw.users) ? raw.users.map(normalizeUser) : [];
  const verificationCodes = Array.isArray(raw.verificationCodes) ? raw.verificationCodes : [];
  const sessions = Array.isArray(raw.sessions) ? raw.sessions : [];
  const gameStates = raw.gameStates && typeof raw.gameStates === 'object' ? raw.gameStates : {};
  const leaderboard = raw.leaderboard && typeof raw.leaderboard === 'object' ? raw.leaderboard : {};

  const usersById = new Map(users.map(user => [user.id, user]));

  await ensureTables();

  await sql.begin(async trx => {
    for (const user of users) {
      await trx`
        insert into users ${trx(user)}
        on conflict (id) do update
        set
          email = excluded.email,
          nickname = excluded.nickname,
          avatar = excluded.avatar,
          created_at = excluded.created_at,
          career_direction = excluded.career_direction,
          has_selected_career = excluded.has_selected_career
      `;
    }

    for (const item of verificationCodes) {
      const email = String(item.email || '').trim().toLowerCase();
      if (!email) continue;

      await trx`
        insert into verification_codes ${trx({
          email,
          code: String(item.code || ''),
          expires_at: Number(item.expiresAt || item.expires_at || 0),
          created_at: Number(item.createdAt || item.created_at || Date.now()),
        })}
        on conflict (email) do update
        set
          code = excluded.code,
          expires_at = excluded.expires_at,
          created_at = excluded.created_at
      `;
    }

    for (const item of sessions) {
      const token = String(item.token || '');
      const userId = String(item.userId || item.user_id || '');
      if (!token || !userId || !usersById.has(userId)) continue;

      await trx`
        insert into sessions ${trx({
          token,
          user_id: userId,
          expires_at: Number(item.expiresAt || item.expires_at || 0),
        })}
        on conflict (token) do update
        set
          user_id = excluded.user_id,
          expires_at = excluded.expires_at
      `;
    }

    for (const [userId, state] of Object.entries(gameStates)) {
      const user = usersById.get(String(userId));
      if (!user) continue;

      const normalizedState = normalizeState(user, state);
      await trx`
        insert into game_saves (
          user_id,
          state_json,
          updated_at
        )
        values (
          ${user.id},
          ${JSON.stringify(normalizedState)}::jsonb,
          ${Date.now()}
        )
        on conflict (user_id) do update
        set
          state_json = excluded.state_json,
          updated_at = excluded.updated_at
      `;
    }

    for (const [userId, entry] of Object.entries(leaderboard)) {
      const normalizedEntry = normalizeLeaderboardEntry(userId, entry);
      if (!usersById.has(normalizedEntry.user_id)) continue;

      await trx`
        insert into leaderboard_entries ${trx(normalizedEntry)}
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
    }
  });

  console.log(`[migrate] source: ${SOURCE_PATH}`);
  console.log(`[migrate] imported users: ${users.length}`);
  console.log(`[migrate] imported verification codes: ${verificationCodes.length}`);
  console.log(`[migrate] imported sessions: ${sessions.length}`);
  console.log(`[migrate] imported game saves: ${Object.keys(gameStates).length}`);
  console.log(`[migrate] imported leaderboard entries: ${Object.keys(leaderboard).length}`);
}

try {
  await run();
} catch (error) {
  console.error('[migrate] failed', error);
  process.exitCode = 1;
} finally {
  await sql.end({ timeout: 5 }).catch(() => undefined);
}
