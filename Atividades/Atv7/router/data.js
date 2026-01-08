const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log(`Acesso a rota data`);
  next();
});

router.post("/", (req, res) => {
  res.send("<h1>Você está utilizando a rota Data</h1><p>Dados recebidos com sucesso!</p>");
});

module.exports = router;
