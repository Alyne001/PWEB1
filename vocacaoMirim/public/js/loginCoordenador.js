document.getElementById("loginCoordForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;

  const res = await fetch("/api/coordenador", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, senha })
  });

  const data = await res.json();

  if (res.ok && data.sucesso) {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/1QSdbF8xt3FM-V5faCFYcuBvld-2EwfZT53BUeZ7FR_E/edit?gid=0";
  } else {
    alert(data.mensagem || "Nome ou senha inválidos");
  }
});
