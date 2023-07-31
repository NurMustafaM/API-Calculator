const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const config = require ('./config/default.json');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = config.server.port;

// Function to check if the Swagger JSON file exists
function checkSwaggerFile() {
  try {
    fs.accessSync('./swagger/swagger_output.json');
    return true;
  } catch (error) {
    return false;
  }
}

app.get('/', (req, res) => {
  const routes = [
    { method: 'POST', path: '/add', description: 'Route to add two numbers' },
    { method: 'GET', path: '/subtract/:a/:b', description: 'Route to substract two numbers' },
    { method: 'GET', path: '/subtract/:a/:b', description: 'Route to subtract two numbers' },
    { method: 'GET', path: '/multiply/:a/:b', description: 'Route to multiply two numbers' },
    { method: 'GET', path: '/divide/:a/:b', description: 'Route to divide two numbers' },
  ];

  res.json({ message: 'Hey! You are accessing an API calculator', routes });
});

if (checkSwaggerFile()) {
  const swaggerDocument = require('./swagger/swagger_output.json');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} else {
  console.log("Swagger file not found. Swagger UI will not be available.");
}

app.use(routes);

app.use((req, res, next) => {
  res.status(404).json({ result: false, message: `Route not found: ${req.url}. Try valid routes: /add, /subtract/:a/:b, /multiply/:a/:b, /divide/:a/:b` });
});

app.listen(port, () => console.log(`Calculator started, you can check through (http://localhost:${port}) OR (http://localhost:${port}/api-docs) for Swagger UI`));

module.exports = app;









