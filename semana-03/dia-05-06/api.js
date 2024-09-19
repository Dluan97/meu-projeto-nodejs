// api.js

const http = require('http');
const fs = require('fs');
const path = require('path');

const arquivoTarefas = path.join(__dirname, 'tarefas.json');

// Função para ler as tarefas do arquivo JSON
function lerTarefas() {
    const data = fs.readFileSync(arquivoTarefas);
    return JSON.parse(data);
}

// Função para salvar as tarefas no arquivo JSON
function salvarTarefas(tarefas) {
    fs.writeFileSync(arquivoTarefas, JSON.stringify(tarefas, null, 2));
}

// Cria o servidor HTTP
const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/tarefas' && req.method === 'GET') {
        // Lê e retorna todas as tarefas
        const tarefas = lerTarefas();
        res.statusCode = 200;
        res.end(JSON.stringify(tarefas));

    } else if (req.url.startsWith('/tarefas/') && req.method === 'DELETE') {
        // Exclui uma tarefa existente
        const id = parseInt(req.url.split('/')[2]);
        let tarefas = lerTarefas();
        tarefas = tarefas.filter(tarefa => tarefa.id !== id);
        salvarTarefas(tarefas);
        res.statusCode = 200;
        res.end(JSON.stringify({ mensagem: "Tarefa excluída com sucesso" }));

    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ mensagem: "Rota não encontrada" }));
    }
});

// Define a porta onde o servidor vai escutar (porta 3000)
const porta = 3000;

// Inicia o servidor
servidor.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}/`);
});
