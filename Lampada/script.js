const buttonOn = document.getElementById("ligar");
const buttonOff = document.getElementById("desligar");
const imgLamp = document.getElementById("lampada");

let estaQueabrada = false;

function lightStagesOn() {
  if (!estaQueabrada) {
    imgLamp.src = "./assets/LampadaLigada.jpg";
  }
}

function lampadaPowerOff() {
  if (!estaQueabrada) {
    imgLamp.src = "./assets/Lampada.jpg";
  }
}
function lampadaIsBroken() {
  estaQueabrada = true;
  imgLamp.src = "./assets/LampadaQuebrada.jpg";
}
buttonOn.addEventListener("click", lightStagesOn);
buttonOff.addEventListener("click", lampadaPowerOff);

imgLamp.addEventListener("dblclick", lampadaIsBroken);
