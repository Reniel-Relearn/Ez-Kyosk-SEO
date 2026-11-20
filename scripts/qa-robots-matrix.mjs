import { spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';

mkdirSync('artifacts/phase13/robots', { recursive: true });
function run(name, site, base) {
  const env = { ...process.env, SITE_URL: site, BASE_PATH: base };
  for (const [label, args] of [['build', ['node_modules/astro/bin/astro.mjs', 'build']], ['verify', ['scripts/verify-build.mjs']]]) {
    const result = spawnSync(process.execPath, args, { env, encoding: 'utf8', timeout: 120000 });
    writeFileSync(`artifacts/phase13/robots/${name}-${label}.log`, `${result.stdout || ''}\n${result.stderr || ''}`);
    if (result.status !== 0) throw new Error(`${name} ${label} failed: ${result.error?.message || result.stderr || result.stdout}`);
  }
  console.log(`PASS: ${name} build and verification`);
}
try {
  run('preview-root', '', '/');
  run('configured-root', 'https://example.test', '/');
  run('configured-subpath', 'https://example.test', '/Ez-Kyosk-SEO');
} finally {
  // Restore a blocked, noindex Pages-shaped local review build even if a case failed.
  run('preview-pages', '', '/Ez-Kyosk-SEO');
}
