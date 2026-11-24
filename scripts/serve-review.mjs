import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,sep,extname} from 'node:path';
const root=resolve('dist'),base='/Ez-Kyosk-SEO',port=Number(process.env.REVIEW_PORT||4332);
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2','.xml':'application/xml','.txt':'text/plain'};
createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,`http://127.0.0.1:${port}`).pathname);
  if(pathname!==base&&!pathname.startsWith(base+'/')){res.writeHead(404);res.end();return;}
  let target=resolve(root,'.'+(pathname.slice(base.length)||'/'));
  if(target!==root&&!target.startsWith(root+sep)){res.writeHead(403);res.end();return;}
  if((await stat(target)).isDirectory())target=resolve(target,'index.html');
  res.writeHead(200,{'Content-Type':types[extname(target)]||'application/octet-stream'});res.end(await readFile(target));
 }catch{res.writeHead(404);res.end();}
}).listen(port,'127.0.0.1',()=>console.log(`Review: http://127.0.0.1:${port}${base}/`));
