// app.js
const express = require("express");
const app = express();
const port = 3000;

// Importa o router de usuários
const usersRouter = require("./router/users");
const indexRouter = require("./router/index");
const aboutRouter = require("./router/about");
const dataRouter = require("./router/data");


// Middleware de aplicação (global)
app.use((req, res, next) => {
  console.log(`Acesso em: ${req.method} ${req.url}`);
  next();
});



// Usa o router de usuários
app.use("/users", usersRouter);
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/data", dataRouter);



// Middleware de erro 404
app.use((req, res) => {
  res
    .status(404)
    .send('<h1>Erro 404</h1><a href="/">Voltar para o início</a>');
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
