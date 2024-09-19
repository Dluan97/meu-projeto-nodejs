//geradorDeSenhas.js
const readline = require('readline');

 //Configurando a readline para ler a entrada do usuário.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function gerarSenha(tamanho, incluirNumeros = false, incluirSimbolos = false) {
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    if (incluirNumeros) {
         caracteres += '0123456789';
    }
   
    if (incluirSimbolos) {
         caracteres += '!@#$%^&*()_+[]{}|;:,.<>?';
    }

    //Configurando a readline para ler a entrada do usuário
   

    let senha ='';
    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }
    return senha;

}

//Exemplo de uso
/*const tamanho = 12; //Tamanho da senha
const incluirNumeros = true; // Incluir números na senha
const incluirSimbolos = true; // Incluir símbolos na senha
const senhaGerada = gerarSenha(tamanho, incluirNumeros, incluirSimbolos);
console.log("Senha gerada:", senhaGerada);*/

rl.question('Qual o tamanho da senha? ', (tamanho) => {
rl.question('Incluir números? (s/n) ', (respostaNumeros) => {
rl.question('Incluir Símbolos? (s/n) ', (respostaSimbolos) => {
const incluirNumeros = respostaNumeros.toLowerCase() === 's';
const incluirSimbolos = respostaSimbolos.toLowerCase() === 's';

const senhaGerada = gerarSenha(parseInt(tamanho), incluirNumeros, incluirSimbolos);
console.log("Senha gerada:", senhaGerada);
});
});
});