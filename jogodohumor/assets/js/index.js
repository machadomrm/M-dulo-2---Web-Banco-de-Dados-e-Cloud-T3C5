const elementoNome = document.getElementById("nome");
const elementoSituacao = document.querySelector("#situacao");
const elementoImg = document.querySelector("#imagem");
let elementoBtn = document.querySelector("#alterar");

elementoBtn.addEventListener("click", () => {
  if (elementoBtn.value == "primeiro") {
    elementoImg.src = "./assets/img/cebolinha_alegre.png";
    elementoNome.innerText = "Cebolinha";
    elementoSituacao.innerText = "Alegre";
    elementoBtn.value = "segundo";
  } else if (elementoBtn.value == "segundo") {
    elementoImg.src = "./assets/img/cebolinha_bravo.jpg";
    elementoNome.innerText = "Cebolinha";
    elementoSituacao.innerText = "Bravo";
    elementoBtn.value = "terceiro";
  } else if (elementoBtn.value == "terceiro") {
    elementoImg.src = "./assets/img/cebolinha_style.jpg";
    elementoNome.innerText = "Cebolinha";
    elementoSituacao.innerText = "Style";
    elementoBtn.value = "quarto";
  } else {
    elementoImg.src = "./assets/img/cebolinha_triste.jpg";
    elementoNome.innerText = "Cebolinha";
    elementoSituacao.innerText = "Triste";
    elementoBtn.value = "primeiro";
  }
});
