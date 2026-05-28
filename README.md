# Escarlata

Ecommerce premium de velas y jabones artesanales. Next.js, TypeScript, Tailwind CSS, Supabase y Mercado Pago.

## Desarrollo

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

### Supabase

Variables en `.env.local` (ver `.env.example`):

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

| Contexto | Import |
|----------|--------|
| Client Components | `createClient` desde `@/lib/supabase/client` |
| Server | `createClient` desde `@/lib/supabase/server` |
| Variables / estado | `@/lib/supabase/env` |

Diagnóstico de conexión (no expone keys): `GET /api/health/supabase`

### Autenticación

- Registro e inicio de sesión con email y contraseña (`signUp`, `signInWithPassword`)
- Cierre de sesión (`signOut`) y sesión persistente vía cookies + middleware
- Rutas protegidas: `/cuenta` · invitado: `/login`, `/registro`
- Server Actions en `lib/actions/auth.ts` · usuario en servidor: `getUser()` desde `lib/services/auth.ts`

En Supabase Dashboard, configurá **Site URL** y **Redirect URLs** con tu dominio (y `http://localhost:3000` en desarrollo).

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 15 (App Router) |
| Estilos | Tailwind CSS v4 |
| Base de datos / Auth | Supabase (preparado) |
| Pagos | Mercado Pago (preparado) |

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio |
| `/catalogo` | Catálogo completo |
| `/producto/[id]` | Ficha de producto |
| `/nosotros` | El taller |
| `/contacto` | Contacto |
| `/login` | Iniciar sesión (Supabase Auth) |
| `/registro` | Crear cuenta |
| `/cuenta` | Perfil (requiere sesión) |

## Estructura

```
app/
  (main)/            # Layout con header y footer
  catalogo/
  producto/[id]/
  nosotros/
  contacto/
  login/
  registro/
components/
  home/              # Secciones de la página principal
  layout/            # Header, footer
  ui/                # Sistema de diseño reutilizable
lib/
  config/            # Sitio, navegación
  constants/         # Rutas
  data/              # Datos estáticos temporales
  design/            # Tokens de diseño
  mercadopago/       # Config de pagos
  services/          # Lógica de negocio
  supabase/          # Clientes browser y server
  utils/             # Utilidades
types/               # Tipos compartidos (commerce, database)
```

## Identidad visual

| Token | Hex |
|-------|-----|
| Crema | `#F5EFE6` |
| Rosa cuarzo | `#D8B4A0` |
| Negro suave | `#1F1F1F` |
| Beige cálido | `#E8DCCF` |
| Gris piedra | `#B7B0A8` |

Colores en `app/globals.css` (Tailwind) y `lib/design/tokens.ts` (JS).

## Próximos pasos

- Catálogo y fichas de producto con Supabase
- Autenticación de usuarios
- Carrito y checkout con Mercado Pago
- Panel de administración
