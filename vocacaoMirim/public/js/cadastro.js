document.getElementById("cadastroForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;
  const capela = document.getElementById("capela").value;

  const res = await fetch("/api/cadastrar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, senha, capela })
  });

  const data = await res.json();

  alert(data.mensagem);

  if (res.ok) {
    window.location.href = "/usuario";
  }
});
