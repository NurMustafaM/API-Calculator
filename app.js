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
    { method: 'POST', path: '/add', description: 'Route to add two numbers' },
    { method: 'GET', path: '/subtract/:a/:b', description: 'Route to substract two numbers' },
    { method: 'GET', path: '/multiply/:a/:b', description: 'Route to multiply two numbers' },
    { method: 'GET', path: '/divide/:a/:b', description: 'Route to divide two numbers' },
  ];

  res.json({ message: 'Hey! You are acessing an API calculator', routes });
});

app.use(routes);

app.use((req, res, next) => {
  res.status(404).json({ result: false, message: `Route not found: ${req.url}. Try valid routes: /add, /subtract/:a/:b, /multiply/:a/:b, /divide/:a/:b` });
});

app.listen(port, () => console.log(`Calculator started, you can check through http://localhost:${port}`));

module.exports = app;
