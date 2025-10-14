const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log(`Acesso a rota Raiz`);
  next();
});

router.get("/", (req, res) => {
  res.send("<h1>Você está utilizando a rota Raiz(/)</h1><p>Bem-vindo à página inicial!</p>");
});

module.exports = router;
