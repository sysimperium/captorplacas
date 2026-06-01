const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  let filePath = reqUrl === '/' || reqUrl === '/index.html' ? '/index.html' : reqUrl;

  const safePath = path.normalize(filePath).replace(/^(\.\.[\/\\])+/, '');
  const absolutePath = path.join(__dirname, safePath);

  if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
    let ext = path.extname(absolutePath).toLowerCase();
    let contentType = 'text/html';
    if (ext === '.js') contentType = 'application/javascript';
    else if (ext === '.css') contentType = 'text/css';
    else if (ext === '.png') contentType = 'image/png';
    else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    else if (ext === '.json') contentType = 'application/json';
    else if (ext === '.csv') contentType = 'text/csv';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(absolutePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log('\n=============================================================');
  console.log(` Servidor PlacaLens (OCR Local) rodando em:`);
  console.log(` 👉 http://localhost:${PORT}`);
  console.log('=============================================================');
  console.log(' Abra o link acima no seu navegador para utilizar o app.');
  console.log('=============================================================\n');
});
