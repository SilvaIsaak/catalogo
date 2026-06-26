-- Seed de produtos adicionais para Supabase

insert into products (name, category, badge, price, original_price, image, images, sizes, description, stock, active)
values
  ('Jersey Corinthians Home', 'Nacional Premium', null, 149.90, null, 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80', '[]', '[]', 'Camisa do Timão em qualidade tailandesa 1:1. Listras clássicas preto e branco.', 12, true),
  ('Jersey Manchester City Home', 'Tailandesa Premium', 'Novo', 169.90, 209.90, 'https://images.unsplash.com/photo-1489987707025-afc232f7ea8f?w=600&q=80', '[]', '[]', 'Camisa do Manchester City em acabamento tailandês premium.', 9, true),
  ('Jersey Argentina Copa América', 'Seleção Premium', null, 144.90, null, 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80', '[]', '[]', 'Manto da Albiceleste campeã em versão tailandesa 1:1.', 14, true);

-- Seed de pedidos de exemplo
insert into orders (customer_name, customer_email, customer_phone, items, total, status)
values
  ('João Silva', 'joao@example.com', '5511999999999', '[{"productId":1,"size":"M","quantity":2}]', 319.80, 'pending'),
  ('Maria Souza', 'maria@example.com', '5511988887777', '[{"productId":2,"size":"G","quantity":1},{"productId":4,"size":"M","quantity":1}]', 319.80, 'paid');
