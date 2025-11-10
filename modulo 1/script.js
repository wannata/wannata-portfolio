document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("tema-btn");
  const body = document.body;

  // Tema
  if (localStorage.getItem("tema") === "escuro") {
    body.classList.add("escuro");
    botao.textContent = "Modo Claro";
  }

  botao.addEventListener("click", function () {
    if (body.classList.contains("escuro")) {
      body.classList.remove("escuro");
      botao.textContent = "Modo Escuro";
      localStorage.setItem("tema", "claro");
    } else {
      body.classList.add("escuro");
      botao.textContent = "Modo Claro";
      localStorage.setItem("tema", "escuro");
    }
  });

  // Contador de visitas
  let visitas = localStorage.getItem("visitas") || 0;
  visitas = parseInt(visitas) + 1;
  localStorage.setItem("visitas", visitas);
  document.getElementById("contador").textContent = `Visitas: ${visitas}`;
});