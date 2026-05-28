-- Tabla de productos Escarlata
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null,
  price numeric(12, 2) not null check (price >= 0),
  currency text not null default 'ARS' check (currency in ('ARS', 'USD')),
  category text not null check (category in ('velas', 'jabones', 'sets')),
  image_url text,
  featured boolean not null default false,
  stock integer check (stock is null or stock >= 0),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists products_slug_idx on public.products (slug);
create index if not exists products_featured_idx on public.products (featured) where active = true;
create index if not exists products_active_idx on public.products (active);

alter table public.products enable row level security;

create policy "Productos activos visibles para todos"
  on public.products
  for select
  using (active = true);

-- Datos iniciales (opcional; ejecutar una sola vez)
insert into public.products (slug, name, description, price, currency, category, featured, stock)
values
  (
    'vela-nocturna',
    'Vela Nocturna',
    'Cera de soja, vainilla y sándalo. 220 g · 45 h de combustión.',
    18500,
    'ARS',
    'velas',
    true,
    24
  ),
  (
    'jabon-lino',
    'Jabón de Lino',
    'Aceites botánicos, arcilla blanca y lavanda. 120 g.',
    9200,
    'ARS',
    'jabones',
    true,
    40
  ),
  (
    'set-amanecer',
    'Set Amanecer',
    'Vela + jabón · edición limitada en beige cálido.',
    24800,
    'ARS',
    'sets',
    true,
    12
  ),
  (
    'vela-amanecer',
    'Vela Amanecer',
    'Cera de soja, bergamota y té blanco. 180 g · 38 h.',
    16200,
    'ARS',
    'velas',
    false,
    18
  ),
  (
    'jabon-arcilla',
    'Jabón de Arcilla',
    'Arcilla rosa, geranio y manteca de karité. 100 g.',
    8800,
    'ARS',
    'jabones',
    false,
    30
  )
on conflict (slug) do nothing;
