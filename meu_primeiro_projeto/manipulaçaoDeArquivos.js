const fs = require('fs');
//Escreva uma frase em um novo arquivo chamado "frase.txt"

fs.writeFile('frase.txt', 'Esta é uma frase de exemplo.', function(err) {
    if (err) throw err;
    console.log('Arquivo criado e frase salva!');
    
    
    //Lê o conteúdo do arquivo "frase.txt"
fs.readFile('frase.txt', 'utf8', function(err, data) {
    if(err) throw err;
    console.log('Conteúdo do arquivo:', data);
});
     
});
// fs.writeFile: Cria um arquivo e escreve o texto especificado dentro dele.

// fs.readFile: Leia o conteúdo de um arquivo e exiba no terminal.

// utf8: Especifica que o arquivo deve ser lido como texto.


const path = require('path');
// Exibe o caminho completo do arquivo "frase.txt"
const caminhoArquivo = path.resolve('frase.txt');
console.log('Caminho completo do arquivo:', caminhoArquivo);

// path.resolve: Gera o caminho completo do arquivo baseado no diretório atual.
