// Helpers para que las rutas internas funcionen tanto en local
// como en GitHub Pages (donde el sitio vive bajo /Alcasa-Webiste).
// Astro expone `import.meta.env.BASE_URL` con el `base` configurado
// en astro.config.mjs (ej: "/Alcasa-Webiste/").

const rawBase = import.meta.env.BASE_URL ?? '/';
const baseNoTrailing = rawBase.replace(/\/+$/, '');

/**
 * Antepone el `base` del sitio a una ruta interna.
 * Acepta rutas con o sin "/" inicial y soporta hashes/query.
 */
export function withBase(path: string): string {
  if (!path) return baseNoTrailing || '/';
  if (/^([a-z]+:)?\/\//i.test(path)) return path;
  if (path.startsWith('#') || path.startsWith('?')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${baseNoTrailing}${normalized}`;
}

/**
 * Quita el prefijo del `base` del pathname actual para poder comparar
 * contra rutas lógicas como "/" o "/servicios".
 */
export function stripBase(pathname: string): string {
  if (!baseNoTrailing) return pathname || '/';
  if (pathname === baseNoTrailing) return '/';
  if (pathname.startsWith(`${baseNoTrailing}/`)) {
    return pathname.slice(baseNoTrailing.length) || '/';
  }
  return pathname || '/';
}
