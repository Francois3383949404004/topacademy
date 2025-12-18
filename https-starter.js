const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const port = 3010;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Utilisez les noms de fichiers exacts que mkcert a générés
// Lignes 11-16 dans votre fichier server.js
// Utilisez les noms de fichiers exacts que mkcert a générés
const httpsOptions = {
  key: fs.readFileSync('localhost+1-key.pem'),
  cert: fs.readFileSync('localhost+1.pem')
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    // Ce message est la confirmation de l'HTTPS !
    console.log(`> Ready on https://localhost:${port}`);
  });
});