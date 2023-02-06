const blocoUm = document.querySelector("#blocoUm");
const blocoDois = document.querySelector("#blocoDois");
const blocoTres = document.querySelector("#blocoTres");
const blocoQuatro = document.querySelector("#blocoQuatro");
const blocoCinco = document.querySelector("#blocoCinco");
const blocoSeis = document.querySelector("#blocoSeis");
const result = document.querySelector("#result");
const resultText = document.querySelector("#resultText");
const tenteNovament = document.querySelector("#tenteNovamente");
const buttonTryAgain = document.querySelector("#tryAgain");

let array = [];
let cont = 2;
let arrayBlock = [
  blocoUm,
  blocoDois,
  blocoTres,
  blocoQuatro,
  blocoCinco,
  blocoSeis,
];
let arrayBlock2 = [
  "blocoUm",
  "blocoDois",
  "blocoTres",
  "blocoQuatro",
  "blocoCinco",
  "blocoSeis",
];
let aux = "";

function RBGColor() {
  result.style.opacity = 0;
  result.style.visibility = "hidden";
  let x = 0;
  let y = 0;
  let z = 0;

  for (let i = 0; i <= 6; i++) {
    x = Math.floor(Math.random() * 255);
    y = Math.floor(Math.random() * 255);
    z = Math.floor(Math.random() * 255);

    array[i] = `RGB(${x}, ${y}, ${z})`;
  }

  for (let j = 0; j <= 5; j++) {
    arrayBlock[j].style.backgroundColor = array[j];
  }

  console.log(array);
  document.querySelector("#corRGB").innerHTML = array[6];
  block = Math.floor(Math.random() * (7 - 1));
  arrayBlock[block].style.backgroundColor = array[6];
  aux = arrayBlock[block];
  console.log(aux);

  document.querySelector("#chances").innerHTML = "Chances: " + cont;
}
RBGColor();

function verificaBotao(child) {
  console.log(child);
  if (cont > 0) {
    if (child == aux) {
      console.log("Voce acertou");
      cont = 3;
      result.style.backgroundColor = "green";
      result.style.opacity = 1;
      result.style.visibility = "visible";
      resultText.innerHTML = "Você Venceu!";
      tenteNovament.innerHTML = "Você deseja jogar novamente?";

      document.querySelector("#chances").innerHTML = "Chances: " + cont;
    } else {
      console.log("Voce errou");
      cont--;
      document.querySelector("#chances").innerHTML = "Chances: " + cont;
    }
  }
  if (cont == 0) {
    result.style.backgroundColor = "red";
    result.style.opacity = 1;
    result.style.visibility = "visible";
    resultText.innerHTML = "Você Perdeu!";
    tenteNovament.innerHTML = "Você deseja tentar novamente?";
    cont = 3;
    console.log("Suas chances acabaram");
  }
}
