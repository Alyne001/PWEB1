const mongoose = require("mongoose");

const CoordenadorSchema = new mongoose.Schema({
  nome: String,
  capela: String,
  senha: String
});

module.exports = mongoose.model("coordenadores", CoordenadorSchema);
