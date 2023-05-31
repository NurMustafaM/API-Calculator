const express = require('express');
const bodyParser = require('body-parser');
const addRoute = require('./routes/addRoute');
const subtractRoute = require('./routes/subtractRoute');
const multiplyRoute = require('./routes/multiplyRoute');
const divideRoute = require('./routes/divideRoute');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const routes = [
    { method: 'GET', path: '/add/:a/:b', description: 'Rota para adicionar dois números' },
    { method: 'GET', path: '/subtract/:a/:b', description: 'Rota para subtrair dois números' },
    { method: 'GET', path: '/multiply/:a/:b', description: 'Rota para multiplicar dois números' },
    { method: 'GET', path: '/divide/:a/:b', description: 'Rota para dividr dois números' }
  ];

  res.json({ message: 'Oi! Você está acessando a uma calculadora API', routes });
});

app.use(addRoute);
app.use(subtractRoute);
app.use(multiplyRoute);
app.use(divideRoute);

app.use((req, res, next) => {

  res.status(404).json({ result: false, message: `Rota não encontrada: ${req.url}. Tente as rotas válidas: /add/:a/:b, /subtract/:a/:b, /multiply/:a/:b, /divide/:a/:b` });
});

app.listen(port, () => console.log(`Calculadora iniciou, você pode conferir através http://localhost:${port}`));
