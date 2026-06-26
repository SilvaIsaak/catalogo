-- Supabase schema recomendado para Gordão Esportes

-- Tabela de produtos do catálogo
create table if not exists products (
  id serial primary key,
  name text not null,
  category text not null,
  badge text,
  price numeric(10,2) not null default 0,
  original_price numeric(10,2),
  image text not null,
  images jsonb not null default '[]',
  sizes jsonb not null default '[]',
  description text,
  stock integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Tabela de configurações do site
create table if not exists config (
  id int primary key default 1,
  whatsapp_number text,
  whatsapp_message text,
  contact_email text,
  contact_phone text,
  store_name text,
  store_tagline text,
  updated_at timestamptz not null default now()
);

-- Tabela de pedidos / carrinhos convertidos em pedidos
create table if not exists orders (
  id bigserial primary key,
  customer_name text,
  customer_email text,
  customer_phone text,
  items jsonb not null,
  total numeric(10,2) not null default 0,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Tabela de administradores (quando usar Supabase Auth)
create table if not exists admins (
  user_id uuid primary key references auth.users(id),
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

-- Atualização automática do campo updated_at quando a linha muda
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Remove triggers antigos, se já existirem
drop trigger if exists products_update_updated_at on products;
drop trigger if exists config_update_updated_at on config;
drop trigger if exists orders_update_updated_at on orders;

create trigger products_update_updated_at
before update on products
for each row execute procedure update_updated_at_column();

create trigger config_update_updated_at
before update on config
for each row execute procedure update_updated_at_column();

create trigger orders_update_updated_at
before update on orders
for each row execute procedure update_updated_at_column();

-- Dados iniciais de exemplo
insert into products (name, category, badge, price, original_price, image, images, sizes, description, stock, active)
values
  ('Jersey Real Madrid Home 24/25', 'Tailandesa Premium', 'Novo', 159.90, 219.90, 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80', '[]', '[]', 'Jersey oficial do Real Madrid para a temporada 2024/25, com qualidade premium de fabricação tailandesa 1:1.', 10, true),
  ('Jersey Brasil Home Copa', 'Nacional Premium', null, 139.90, null, 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80', '[]', '[]', 'Camisa oficial da Seleção Brasileira em versão premium tailandesa.', 15, true),
  ('Jersey Barcelona Away', 'Tailandesa 1:1', 'Destaque', 179.90, 229.90, 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80', '[]', '[]', 'Jersey away do Barcelona em versão tailandesa premium.', 8, true)
on conflict do nothing;

insert into config (id, whatsapp_number, whatsapp_message, contact_email, contact_phone, store_name, store_tagline)
values
  (1, '5511999999999', 'Olá! Tenho interesse nos produtos da Gordão Esportes!', 'contato@gordaoesportes.com', '(11) 99999-9999', 'Gordão Esportes', 'A maior distribuidora de artigos esportivos importados de alta qualidade das Américas.')
on conflict (id) do update set
  whatsapp_number = excluded.whatsapp_number,
  whatsapp_message = excluded.whatsapp_message,
  contact_email = excluded.contact_email,
  contact_phone = excluded.contact_phone,
  store_name = excluded.store_name,
  store_tagline = excluded.store_tagline,
  updated_at = now();
