const express = require("express"); // importa o módulo express neste arquivo
const app = express(); // iniciando o express

// criando a rota inicial
app.get("/", function (req, res) {
  res.send("<h1>Seja bem-vindo ao meu site atualizado!</h1>");
});

// rota do cadastro de produtos
app.get("/produtos", function (req, res) {
  res.send("<h1>Produtos disponíveis para você!</h1>");
});

// rota com parâmetro (alteração no texto de resposta)
app.get("/pesquisa/:termo", function (req, res) {
  // req --> dados enviados pelo cliente
  // res --> resposta enviada pelo servidor de volta ao cliente
  res.send("Você pesquisou por: " + req.params.termo);
});

app.listen(process.env.PORT ?? 3000, function (erro) {
  // cria a aplicação na porta 3000
  if (erro) {
    console.log("Erro ao Iniciar.");
  } else {
    console.log("Servidor Iniciado na porta 3000.");
  }
});
