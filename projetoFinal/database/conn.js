const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://coroinhaAdmin:coroinha123@meuapp.8luznjk.mongodb.net/igreja",
);

mongoose.connection.on("connected", () => {
  console.log("MongoDB conectado com sucesso");
});

mongoose.connection.on("error", (err) => {
  console.error("Erro ao conectar no MongoDB", err);
});
