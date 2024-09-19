// api.js

const http = require('http');
const fs = require('fs');

const arquivoLetras = 'letras.json';

// Função para ler e salvar as letras musicais
function lerLetras() { 
     // Implemente a leitura do arquivo letras.json
    const data = fs.readFileSync(arquivoLetras, 'utf8');
    return JSON.parse(data);
}
function salvarLetras(letras) {
    // Implemente a gravaçaõ no arquivo letras.json
    const data = JSON.stringify(letras, null, 2);
    fs.writeFileSync(arquivoLetras, data, 'utf8');
}

// Criação do servidor HTTP
const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/letras' && req.method === 'GET') {
        const letras = lerLetras();
         res.statusCode = 200;
         res.end(JSON.stringify(letras));

    } else if (req.url === '/letras' && req.method === 'POST'){
        let corpo = '';
        req.on('data', (chunk) => {
            corpo += chunk.toString();
        });

        req.on('end', () => {
            const novaLetra = JSON.parse(corpo);
            const letras = lerLetras();
            letras.push(novaLetra);
            salvarLetras(letras);
            res.statusCode = 201;
            res.end(JSON.stringify(novaLetra));
        });

    }else if (req.url.startsWith('/letras/') && req.method === 'PUT') {
        const id = parseInt(req.url.split('/')[2]);
        let corpo = '';
        req.on('data', (chunk) => {
            corpo += chunk.toString();
        });

        req.on('end', () => {
            const letrasAtualizada = JSON.parse(corpo);
            let letras = lerLetras();
            letras = letras.map(letras => letras.id === id ? letrasAtualizada : letras);
            salvarLetras(letras);
            res.statusCode = 200;
            res.end(JSON.stringify(letrasAtualizada));
        });

    }else if (req.url.startsWith('/letras/') && req.method === 'DELETE') {
        const id = parseInt(req.url.split('/')[2]);
        let letras = lerLetras();
        letras = letras.filter(letras => letras.id !== id);
        salvarLetras(letras);
        res.statusCode = 200;
        res.end(JSON.stringify({ mensagem: "Letra excluída com sucesso"}));

    }   else {
        res.statusCode = 404;
        res.end(JSON.stringify({ mensagem: "Rota não encontrada"}));
    }
});

// Define a porta onde o servidor vai escutar
const porta = 3000;

// Inicia o servidor
servidor.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}/`);
});