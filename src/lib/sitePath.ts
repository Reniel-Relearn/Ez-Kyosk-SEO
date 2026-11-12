const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const sitePath = (path = '/') => {
  if (!path.startsWith('/')) throw new Error(`Site paths must start with "/": ${path}`);
  return `${base}${path}` || '/';
};
