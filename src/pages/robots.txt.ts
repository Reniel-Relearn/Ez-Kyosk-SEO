import { sitePath } from '../lib/sitePath';

export function GET({site}) { return new Response(site ? `User-agent: *\nAllow: /\nSitemap: ${new URL(sitePath('/sitemap.xml'),site)}\n` : 'User-agent: *\nDisallow: /\n', {headers:{'Content-Type':'text/plain'}}); }
