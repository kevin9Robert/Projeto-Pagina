document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada!");
  
  const botoes = document.querySelectorAll(".btn-warning");
  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Botão clicado!");
    });
  });
});