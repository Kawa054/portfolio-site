create table if not exists visits (
  id bigserial primary key,
  visitor_hash text not null,
  path text not null,
  referrer text,
  language text,
  screen text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists visits_created_at_idx on visits (created_at desc);
create index if not exists visits_path_idx on visits (path);
create index if not exists visits_visitor_hash_idx on visits (visitor_hash);
