create table if not exists users (
  id text primary key,
  email text not null unique,
  nickname text not null default '',
  avatar text not null default '',
  created_at bigint not null,
  career_direction text not null default '',
  has_selected_career boolean not null default false
);

create table if not exists verification_codes (
  email text primary key,
  code text not null,
  expires_at bigint not null,
  created_at bigint not null
);

create table if not exists sessions (
  token text primary key,
  user_id text not null references users(id) on delete cascade,
  expires_at bigint not null
);

create table if not exists game_saves (
  user_id text primary key references users(id) on delete cascade,
  state_json jsonb not null,
  updated_at bigint not null
);

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
);

create index if not exists idx_sessions_expires_at on sessions (expires_at);
create index if not exists idx_verification_codes_expires_at on verification_codes (expires_at);
create index if not exists idx_leaderboard_updated_at on leaderboard_entries (updated_at desc);
