const readline = require('readline');
//Configurar a interface para ler a entrada do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

//Pede ao usuário para digitar uma frase
rl.question("Digite uma frase: ", function(frase) {
    //Divide a frase em palavras, usando o espaço como separador
    const palavras = frase.split('');

    // Conta o número de palavras
    const numeroDePalavras = palavras.length;

    //Mostra o número de palavras no terminal
    console.log("Número de palavras:", numeroDePalavras);

    // Fecha a interface de leitura
    rl.close();
});

