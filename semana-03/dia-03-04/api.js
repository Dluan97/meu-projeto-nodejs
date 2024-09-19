// api.js

const http = require('http');

//Dados de exemplo que serão retornados pela API
const usuario = {
    nome: "Lucas",
    idade: 25,
    cidade: "São Paulo"
};

const produtos = [
    { id: 1, nome: "Produto A", preco: 10.0},
    { id: 2, nome: "Produto B", preco: 20.0},
    { id: 3, nome: "Produto C", preco: 30.0}
];


//Criar um servidor que responde com diferentes dados dependendo da rota

const servidor = http.createServer((req, res) => {
    res.statusCode = 200; // Defina o status da resposta com 200 (ok)
    res.setHeader('Content-Type', 'application/json'); // Define o tipo de conteúdo com JSON
    // res.end(JSON.stringify(dados)); // Converte o objeto 'dados' para JSON e envia como resposta
    
    if (req.url === '/usuario') {
        res.end(JSON.stringify(usuario));
    } else if (req.url === '/produtos') {
        res.end(JSON.stringify(produtos));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ mensagem: "Rota não encontrada"}));
    }
});

//Define a porta onde o servidor vai escudar (porta 300)
const porta = 3000;

// Inicia o servidor
servidor.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}/`);

});


