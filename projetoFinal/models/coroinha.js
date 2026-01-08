const mongoose = require("mongoose");

const CoroinhaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  capela: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Coroinha", CoroinhaSchema);
