const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/index", (req, res) => {
  res.render("index");
});

router.get("/usuario", (req, res) => {
  res.render("usuario");
});

router.get("/admin", (req, res) => {
  res.render("loginCoordenador");
});

router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

module.exports = router;
