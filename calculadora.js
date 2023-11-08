function calcular() {
  const tipo = document.querySelector('#tipo').value;
  const numero = document.querySelector('#numero').value;

  if (numero < 1 || numero > 300) {
    document.querySelector('#resultado').innerHTML = "O número deve estar entre 1 e 300.";
    return;
  }

  if (isNaN(numero)) {
    document.querySelector('#resultado').innerHTML = "O número deve ser um número.";
    return;
  }

  const resultado = 300 / numero;

  // Alterado para PUT
  fetch('calculadora.php', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `tipo=${tipo}&numero=${numero}`
  })
    .then((response) => {
      if (response.status === 200) {
        const data = JSON.parse(response.text());
        document.querySelector('#resultado').innerHTML = data.resultado;
      } else {
        document.querySelector('#resultado').innerHTML = "Erro: " + response.status;
      }
    })
    .catch((error) => {
      document.querySelector('#resultado').innerHTML = "Erro: " + error;
    });
}

document.querySelector('#numero').addEventListener('input', calcular);
document.querySelector('#tipo').addEventListener('change', calcular);

document.querySelector('#submit').addEventListener('click', calcular);
