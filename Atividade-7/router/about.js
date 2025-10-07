const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log(`Acesso a rota About`);
  next();
});

router.get("/", (req, res) => {
  res.send("<h1>Você está utilizando a rota About(/)</h1><p>Bem-vindo à página inicial!</p>");
});

module.exports = router;
