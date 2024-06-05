document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const clickImc = () => {
    const inputNome = document.getElementById("nome").value;
    const inputAltura = parseFloat(document.getElementById("altura").value);
    const inputPeso = parseFloat(document.getElementById("peso").value);
    const result = document.getElementById("resultado");

    let classificacao = "";
    if (
      inputNome !== "" &&
      isNaN(inputAltura) !== "" &&
      isNaN(inputPeso) !== ""
    ) {
      const alturaEmMetros = inputAltura > 3 ? inputAltura / 100 : inputAltura;
      const resultImc = (inputPeso / alturaEmMetros ** 2).toFixed(2);
      result.innerHTML = "";

      if (resultImc <= 18.5) {
        classificacao = "Abaixo do peso";
      } else if (resultImc <= 24.9) {
        classificacao = "Peso normal";
      } else if (resultImc <= 29.9) {
        classificacao = "Sobrepeso";
      } else {
        classificacao = "Obesidade";
      }
      result.innerHTML = `${inputNome}, seu IMC é de: ${resultImc} e sua classificação é: ${classificacao}.`;
    } else {
      result.innerHTML = `Por favor, preencha todos os campos corretamente.`;
    }
  };
  button.addEventListener("click", clickImc);
});
