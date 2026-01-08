const express = require("express");
const router = express.Router();

// Middleware para ler dados de formulários
router.use(express.urlencoded({ extended: true }));

// Página inicial /users (formulário de login por ID)
router.get("/", (req, res) => {
  res.send(`
    <h1>Informe seu ID de usuário</h1>
    <form action="/users" method="POST">
      <input type="text" name="userid" placeholder="Digite seu ID" required />
      <button type="submit">Entrar</button>
    </form>
  `);
});

// Recebe o ID do usuário e redireciona para /users/:userid
router.post("/", (req, res) => {
  const { userid } = req.body;
  if (!userid) {
    return res.send("<p>ID inválido. <a href='/users'>Tente novamente</a></p>");
  }
  res.redirect(`/users/${userid}`);
});

// **Rotas específicas primeiro**
router.get("/signup", (req, res) => {
  res.send("<h1>Rota: /users/signup</h1><p>Formulário de cadastro.</p>");
});

router.get("/signin", (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form action="/users/signin" method="POST">
      <input type="text" name="userid" placeholder="Digite seu ID" required />
      <button type="submit">Entrar</button>
    </form>
  `);
});

// Recebe o POST do signin e redireciona para /users/:userid
router.post("/signin", (req, res) => {
  const { userid } = req.body;
  if (!userid) {
    return res.send("<p>ID inválido. <a href='/users/signin'>Tente novamente</a></p>");
  }
  res.redirect(`/users/${userid}`);
});

// Rota dinâmica /users/:userid (sempre por último!)
router.get("/:userid", (req, res) => {
  const { userid } = req.params;
  res.send(`<h1>Bem-vindo, usuário ${userid}!</h1>`);
});

module.exports = router;
