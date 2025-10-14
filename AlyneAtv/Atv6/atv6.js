// app.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware 
app.use((req, res, next) => {
  console.log(` Acesso em: ${req.method} ${req.url}`);
  next();
});

// Rotas
app.get("/", (req, res) => {
  res.send("<h1>Você está utilizando a rota /</h1><p>Bem-vindo à página inicial</p>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Rota: /about</h1><p>Sobre o site.</p>");
});

app.post("/data", (req, res) => {
  res.send("<h1>Rota: /data (POST)</h1><p>Dados recebidos com sucesso!</p>");
});

app.get("/users/signin", (req, res) => {
  res.send("<h1>Rota: /users/signin</h1><p>Página de login.</p>");
});

app.get("/users/signup", (req, res) => {
  res.send("<h1>Rota: /users/signup</h1><p>Página de cadastro.</p>");
});

app.get("/users/:userid", (req, res) => {
  const userid = req.params.userid;
  if (!userid) return res.redirect("/users/signup");
  res.send(`<h1>Bem-vindo, usuário ${userid}!</h1>`);
});

app.get("/users", (req, res) => {
  res.redirect("/users/signup");
});

app.use((req, res) => {
  res
    .status(404)
    .send('<h1>Erro 404</h1><a href="/">Voltar para o início</a>');
});

app.listen(port, () => {
  console.log(` Servidor rodando em: http://localhost:${port}`);
});
