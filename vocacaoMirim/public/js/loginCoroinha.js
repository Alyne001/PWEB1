document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;
  const capelaSelect = document.getElementById("capela");

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, senha })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.mensagem || "Erro ao fazer login");
      return;
    }

    capelaSelect.value = data.capela;
    capelaSelect.disabled = true;

    if (data.linkEscala) {
      window.location.href = data.linkEscala;
    } else {
      alert("Nenhuma escala disponível para esta capela.");
    }

  } catch {
    alert("Erro ao conectar com o servidor");
  }
});
