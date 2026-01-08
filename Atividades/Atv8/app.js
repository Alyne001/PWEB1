// app.js
const express = require("express");
const app = express();
const port = 3000;

// Configurar EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Importar routers
const indexRouter = require("./router/index");
const aboutRouter = require("./router/about");
const dataRouter = require("./router/data");
const usersRouter = require("./router/users");

// Middleware global
app.use((req, res, next) => {
  console.log(`Acesso em: ${req.method} ${req.url}`);
  next();
});

// Usar rotas
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/data", dataRouter);
app.use("/users", usersRouter);

// Middleware 404
app.use((req, res) => {
  res.status(404).send("<h1>Erro 404 - Página não encontrada</h1><a href='/'>Voltar</a>");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
