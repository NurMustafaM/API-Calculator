const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger_output.json');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 8080;

app.get('/', (req, res) => {
  const routes = [
    { method: 'POST', path: '/add', description: 'Route to add two numbers' },
    { method: 'GET', path: '/subtract/:a/:b', description: 'Route to subtract two numbers' },
    { method: 'GET', path: '/multiply/:a/:b', description: 'Route to multiply two numbers' },
    { method: 'GET', path: '/divide/:a/:b', description: 'Route to divide two numbers' },
  ];

  res.json({ message: 'Hey! You are accessing an API calculator', routes });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

app.use((req, res, next) => {
  res.status(404).json({ result: false, message: `Route not found: ${req.url}. Try valid routes: /add, /subtract/:a/:b, /multiply/:a/:b, /divide/:a/:b` });
});

app.listen(port, () => console.log(`Calculator started, you can check through (http://localhost:${port}) OR (http://localhost:${port}/api-docs) for Swagger UI`));

module.exports = app;
