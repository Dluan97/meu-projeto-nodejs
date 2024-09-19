// calculadora
const operacoes = require('./operacoes');

const numero1 = 10;
const numero2 = 5;

console.log(`A soma de ${numero1} e ${numero2}
    é: ${operacoes.somar(numero1, numero2)}`
);

console.log(`A subtração de ${numero1} e ${numero2} 
    é: ${operacoes.subtrair(numero1,numero2)}`
);