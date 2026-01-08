const express = require("express");
const router = express.Router();

const Coordenador = require("../models/coordenador");

router.post("/", async (req, res) => {
  const { nome, senha } = req.body;

  const coord = await Coordenador.findOne({ nome, senha });

  if (!coord) {
    return res.status(401).json({
      sucesso: false,
      mensagem: "Nome ou senha inválidos"
    });
  }

  res.json({
    sucesso: true
  });
});

module.exports = router;
