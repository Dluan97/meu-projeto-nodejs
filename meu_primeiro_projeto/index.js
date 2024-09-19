let numero = 42; //Número 
let texto = "Aprendendo JavaScript"; // Texto (String)
let verdadeiro = true; // Booleano (verdadeiro ou falso)

console.log("Número:", numero);
console.log("Texto:", texto);
console.log("Verdadeiro:", verdadeiro);

/*let a = 10;
let b = 5;
let soma = a + b;   // Soma
let diferenca = a - b; // Subtração
let produto = a * b;  // Multiplicação
let divisão = a / b;  // Divisão

console.log("Soma:", soma);
console.log("Diferença:", diferenca);
console.log("Produto:", produto);
console.log("Divisão:", divisão);*/

/*let idade = 16;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
 console.log("Você é menor de idade.");
}

let frutas = ["maçâ", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
} */

let numeros = [10, 20, 30];
let somaTotal = 0;

for (let i = 0; i < numeros.length; i++) {
    somaTotal += numeros[i];  // somaTotal = somaTotal + numeros[i];
}

console.log("Soma total:", somaTotal);
