require("./database/conn");

const express = require("express");
const path = require("path");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// rotas de páginas
app.get("/", (req, res) => res.render("index"));
app.get("/usuario", (req, res) => res.render("usuario"));
app.get("/cadastro", (req, res) => res.render("cadastro"));
app.get("/admin", (req, res) => res.render("loginCoordenador"));

// ROTAS DA API
const coroinhaRoutes = require("./routes/coroinha.routes");
const coordenadorRoutes = require("./routes/coordenador.routes");

app.use("/api", coroinhaRoutes);
app.use("/api/coordenador", coordenadorRoutes);

// servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
