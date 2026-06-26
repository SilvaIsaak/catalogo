# Supabase Setup para Gordão Esportes

## 1) Criar o projeto no Supabase
1. Faça login em https://app.supabase.com.
2. Crie um novo projeto.
3. Guarde o `Project URL` e a `anon public` key (API key pública).

## 2) Executar o schema SQL
1. No painel do seu projeto Supabase, abra o `SQL Editor`.
2. Cole todo o conteúdo de `supabase-schema.sql`.
3. Execute o script.

> Esse script cria as tabelas `products`, `config`, `orders` e `admins`, além dos triggers de `updated_at`.

## 3) Popular dados iniciais
1. Ainda no `SQL Editor`, use os inserts presentes no final de `supabase-schema.sql`.
2. Se quiser, adicione mais produtos com itens semelhantes ao exemplo.

## 4) Configurar `SUPABASE_URL` e `SUPABASE_ANON_KEY`
1. Abra `index.html` e `admin.html`.
2. Localize os trechos:

```html
<script>
    window.SUPABASE_URL = '';
    window.SUPABASE_ANON_KEY = '';
</script>
```

3. Substitua as strings vazias pelos valores do seu projeto.

## 5) Testar a integração
1. Abra `index.html` no navegador.
2. Verifique se o catálogo carrega.
3. Abra `admin.html` e confirme se a página administrativa carrega dados.

## 6) Se quiser usar autenticação (opcional)
1. Habilite o Supabase Auth no painel.
2. Adicione usuários/admins na tabela `auth.users` e `admins`.

---

### Observação
- Se o Supabase não estiver configurado corretamente, o seu site continua funcionando usando `localStorage`.
- Isso significa que a integração é opcional e segura para testes locais.
