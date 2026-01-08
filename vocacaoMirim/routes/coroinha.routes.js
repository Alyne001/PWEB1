const express = require("express");
const router = express.Router();

const Coroinha = require("../models/coroinha");

// 📌 CADASTRO
router.post("/cadastrar", async (req, res) => {
  const { nome, capela, senha } = req.body;

  if (!nome || !capela || !senha) {
    return res.status(400).json({
      mensagem: "Preencha todos os campos"
    });
  }

  const existe = await Coroinha.findOne({ nome });

  if (existe) {
    return res.status(409).json({
      mensagem: "Você já possui cadastro"
    });
  }

  await Coroinha.create({ nome, capela, senha });

  res.status(201).json({
    mensagem: "Cadastro realizado com sucesso"
  });
});

// 📌 LOGIN
router.post("/login", async (req, res) => {
  const { nome, senha } = req.body;

  const usuario = await Coroinha.findOne({ nome, senha });

  if (!usuario) {
    return res.status(401).json({
      mensagem: "Nome ou senha inválidos"
    });
  }

  let linkEscala = "";

  if (usuario.capela === "sj") {
    linkEscala =
      "https://docs.google.com/spreadsheets/d/1QSdbF8xt3FM-V5faCFYcuBvld-2EwfZT53BUeZ7FR_E/edit";
  }

  res.json({
    sucesso: true,
    capela: usuario.capela,
    linkEscala
  });
});

module.exports = router;
