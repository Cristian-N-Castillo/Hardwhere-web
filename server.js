// Servidor personalizado para hosting cPanel/Passenger (V2Networks).
// cPanel "Setup Node.js App" ejecuta este archivo directamente con `node server.js`
// y expone el puerto a usar en la variable de entorno PORT.
const { createServer } = require("http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`> Servidor Next.js escuchando en el puerto ${port} (${dev ? "development" : "production"})`);
  });
});
