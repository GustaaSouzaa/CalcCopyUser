function calcular() {
  const tipo = document.querySelector("#tipo").value;
  const numero = document.querySelector("#numero").value;

  if (numero < 1 || numero > 300) {
    document.querySelector("#resultado").innerHTML = "O número deve estar entre 1 e 300.";
    return;
  }

  const resultado = 300 / numero;

  document.querySelector("#resultado").innerHTML = `${tipo}: ${resultado}%`;
}

document.querySelector("#numero").addEventListener("input", calcular);
document.querySelector("#tipo").addEventListener("change", calcular);

document.querySelector("#submit").addEventListener("click", calcular);