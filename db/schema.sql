create table if not exists visits (
  id bigserial primary key,
  visitor_hash text not null,
  path text not null,
  referrer text,
  language text,
  screen text,
  user_agent text,
  country text,
  region text,
  city text,
  asn bigint,
  as_organization text,
  colo text,
  created_at timestamptz not null default now()
);

alter table visits add column if not exists country text;
alter table visits add column if not exists region text;
alter table visits add column if not exists city text;
alter table visits add column if not exists asn bigint;
alter table visits add column if not exists as_organization text;
alter table visits add column if not exists colo text;

create index if not exists visits_created_at_idx on visits (created_at desc);
create index if not exists visits_path_idx on visits (path);
create index if not exists visits_visitor_hash_idx on visits (visitor_hash);
create index if not exists visits_region_idx on visits (region);
create index if not exists visits_as_organization_idx on visits (as_organization);
