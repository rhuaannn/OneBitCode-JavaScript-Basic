let number = parseFloat(prompt("Escolha um numero para ser multiplicado?"));
let multiplicacao = 1
for (number = number; multiplicacao <= 20; multiplicacao++) {
   
    resultado = number * multiplicacao
    alert(`A multiplicação de:${number} * ${multiplicacao} \n ${resultado}\n`)
}