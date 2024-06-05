const automaticButton = document.getElementById("img-semaforo");
const button = document.getElementById("buttons");
let colorIndex = 0;
let intervalId = null;
LuzesDoSemaforo = (event) => {
  stopSemaforo();
  ligar[event.target.id]();
};
const nextIndex = () => {
  colorIndex = colorIndex < 2 ? ++colorIndex : 0;
};
const changeColor = () => {
  const colors = ["vermelho", "amarelo", "verde"];
  const color = colors[colorIndex];
  ligar[color]();
  nextIndex();
};
const stopSemaforo = () => {
  clearInterval(intervalId);
};
const ligar = {
  vermelho: () => (automaticButton.src = "assets/vermelho.png"),
  amarelo: () => (automaticButton.src = "assets/amarelo.png"),
  verde: () => (automaticButton.src = "assets/verde.png"),
  automatico: () => (intervalId = setInterval(changeColor, 3000)),
};

button.addEventListener("click", LuzesDoSemaforo);
