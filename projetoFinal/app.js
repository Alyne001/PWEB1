require("./database/conn");
const express = require("express");
const path = require("path");
const app = express();
const coroinha = require("./models/coroinha");
const coordenador = require("./models/coordenador");
const pagesRoutes = require("./routes/pages.routes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));




//Cadatro de coroinhas
app.post("/api/cadastrar", async (req, res) => {
  const { nome, capela, senha } = req.body;

  if (!nome || !capela || !senha) {
    return res.status(400).json({ mensagem: "Preencha todos os campos" });
  }

  const existe = await coroinha.findOne({ nome });

  if (existe) {
    return res.status(409).json({ mensagem: "Usuário já cadastrado" });
  }

  await coroinha.create({ nome, capela, senha });

  res.status(201).json({ mensagem: "Cadastro realizado com sucesso" });
});

// loguin coroinhas
app.post("/api/login", async (req, res) => {
  const { nome, senha } = req.body;

  // verifica se o nome existe
  const usuario = await coroinha.findOne({ nome });

  if (!usuario) {
    return res.status(404).json({
      sucesso: false,
      mensagem: "Você ainda não tem um cadastro! Cadastre-se"
    });
  }

  // verifica se a senha está correta
  if (usuario.senha !== senha) {
    return res.status(401).json({
      sucesso: false,
      mensagem: "Nome ou senha inválidos"
    });
  }

  // link da escala por capela
  let linkEscala = "";

  if (usuario.capela === "sj") {
    linkEscala =
      "https://docs.google.com/spreadsheets/d/1QSdbF8xt3FM-V5faCFYcuBvld-2EwfZT53BUeZ7FR_E/edit";
  }

  // Sucesso
  res.json({
    sucesso: true,
    capela: usuario.capela,
    linkEscala
  });
});

// loguin coordenador
app.post("/api/coordenador", async (req, res) => {
  const { nome, senha } = req.body;

  const coord = await coordenador.findOne({ nome, senha });
  
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

app.use("/", pagesRoutes);



// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});