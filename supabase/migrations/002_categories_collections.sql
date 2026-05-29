-- Categorías y colecciones (jerarquía: categoría → colección opcional → producto)

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  image_url text,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.collections (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.categories (id) on delete cascade,
  slug text not null,
  name text not null,
  description text,
  image_url text,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (category_id, slug)
);

create index if not exists collections_category_id_idx on public.collections (category_id);
create index if not exists categories_sort_idx on public.categories (sort_order) where active = true;

-- Relaciones en products
alter table public.products
  add column if not exists category_id uuid references public.categories (id),
  add column if not exists collection_id uuid references public.collections (id) on delete set null;

create index if not exists products_category_id_idx on public.products (category_id);
create index if not exists products_collection_id_idx on public.products (collection_id);

-- Categorías iniciales
insert into public.categories (slug, name, description, sort_order)
values
  ('velas', 'Velas', 'Velas artesanales de cera natural, pensadas para ritual y calma.', 1),
  ('jabones', 'Jabones', 'Jabones elaborados en frío con aceites botánicos y esencias equilibradas.', 2),
  ('kits', 'Kits', 'Sets curados para regalar o iniciar tu ritual en casa.', 3),
  ('blends', 'Blends', 'Mezclas aromáticas para ambiente y bienestar.', 4),
  ('accesorios', 'Accesorios', 'Complementos para completar tu experiencia sensorial.', 5)
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  sort_order = excluded.sort_order;

-- Colecciones (pertenecen a Velas)
insert into public.collections (category_id, slug, name, description, sort_order)
select c.id, v.slug, v.name, v.description, v.sort_order
from public.categories c
cross join (
  values
    ('momentos', 'Collection Momentos', 'Fragancias que evocan instantes íntimos y memorables.', 1),
    ('rituales', 'Collection Rituales', 'Aromas profundos para ceremonias lentas y espacios contemplativos.', 2)
) as v(slug, name, description, sort_order)
where c.slug = 'velas'
on conflict (category_id, slug) do update set
  name = excluded.name,
  description = excluded.description,
  sort_order = excluded.sort_order;

-- Migrar category (texto) → category_id
update public.products p
set category_id = c.id
from public.categories c
where p.category_id is null
  and (
    (p.category = 'velas' and c.slug = 'velas')
    or (p.category = 'jabones' and c.slug = 'jabones')
    or (p.category = 'sets' and c.slug = 'kits')
  );

-- Asignar colecciones a velas de ejemplo
update public.products p
set collection_id = col.id
from public.collections col
inner join public.categories cat on cat.id = col.category_id
where p.slug = 'vela-nocturna'
  and cat.slug = 'velas'
  and col.slug = 'momentos';

update public.products p
set collection_id = col.id
from public.collections col
inner join public.categories cat on cat.id = col.category_id
where p.slug = 'vela-amanecer'
  and cat.slug = 'velas'
  and col.slug = 'rituales';

-- Productos sin categoría → Accesorios (fallback)
update public.products p
set category_id = c.id
from public.categories c
where p.category_id is null
  and c.slug = 'accesorios';

-- Eliminar columna legacy (solo si existe)
alter table public.products drop constraint if exists products_category_check;
alter table public.products drop column if exists category;

-- category_id obligatorio
alter table public.products
  alter column category_id set not null;

-- RLS
alter table public.categories enable row level security;
alter table public.collections enable row level security;

drop policy if exists "Categorías activas visibles para todos" on public.categories;
create policy "Categorías activas visibles para todos"
  on public.categories for select using (active = true);

drop policy if exists "Colecciones activas visibles para todos" on public.collections;
create policy "Colecciones activas visibles para todos"
  on public.collections for select using (active = true);
