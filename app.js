const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use(cors());

app.get('/', (req, res) => {
  const routes = [
    { method: 'POST', path: '/add', description: 'Rota para adicionar dois números' },
    { method: 'GET', path: '/subtract/:a/:b', description: 'Rota para subtrair dois números' },
    { method: 'GET', path: '/multiply/:a/:b', description: 'Rota para multiplicar dois números' },
    { method: 'GET', path: '/divide/:a/:b', description: 'Rota para dividir dois números' },
  ];

  res.json({ message: 'Oi! Você está acessando uma calculadora API', routes });
});

app.use(routes);

app.use((req, res, next) => {
  res.status(404).json({ result: false, message: `Rota não encontrada: ${req.url}. Tente as rotas válidas: /add, /subtract/:a/:b, /multiply/:a/:b, /divide/:a/:b` });
});

app.listen(port, () => console.log(`Calculadora iniciou, você pode conferir através http://localhost:${port}`));

module.export = app;