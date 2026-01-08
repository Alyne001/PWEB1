const express = require("express");
const router = express.Router();

// páginas
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/index", (req, res) => {
  res.render("index");
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

router.get("/usuario", (req, res) => {
  res.render("usuario");
});

router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

router.get("/login-coordenador", (req, res) => {
  res.render("loginCoordenador");
});

module.exports = router;
