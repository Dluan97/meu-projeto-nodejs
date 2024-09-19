//server.js

const http = require('http');

//Criar um servidor que responde a todas as requisições com "Olá, Mundo"
const servidor = http.createServer((req, res) => {
res.statusCode = 200; //Define o status da resposta como 200 (ok)

if (req.url === '/') {
    res.setHeader('Content-type', 'text/plain'); // Define o tipo de conteúdo como texto simples
    res.end('<h1>Bem-vindo a Pagina Inicial!<h1><p>Esta e a pagina principal.</p>'); //Envia a resposta "Olá mundo!" e termina aresposta}
} else if (req.url === '/sobre') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('<h1>Sobre Nos</h1><p>Esta é a página Sobre.</p>');
} else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('<h1>404 - Página Não encontrada</h1><p>Desculpe, não conseguimos encontrar o que você está procurando.<p>');
}
});

// Define a porta onde o servidor vai escutar (porta 3000)
const porta = 3000;

// Iniciar o servidor
servidor.listen(porta, () => {
    console.log(`Servidor rodando em https://localhost:${porta}/`);
});