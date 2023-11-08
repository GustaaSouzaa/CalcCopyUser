<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  die('Método não permitido');
}

$tipo = htmlspecialchars($_POST['tipo']);
$numero = htmlspecialchars($_POST['numero']);

if ($numero < 1 || $numero > 300) {
  echo 'O número deve estar entre 1 e 300.';
  exit;
}

if (isNaN($numero)) {
  echo 'O número deve ser um número.';
  exit;
}

$resultado = 300 / $numero;

echo <<<HTML
<h1>Calculadora de porcentagem</h1>

<p>Tipo: ${tipo}</p>
<p>Número: ${numero}</p>
<p>Porcentagem: ${resultado}%</p>
HTML;
