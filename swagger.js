const swaggerAutogen = require("swagger-autogen")();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger_output.json');
const app = require('./app');

const application = express();
const port = 3000;


application.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const server = application.listen(port, () => {
  console.log(`Swagger UI is available at http://localhost:${server.address().port}/api-docs`);
});

const endpointsFiles = ["./routes/routes.js"];

const doc = {
  swagger: "2.0",
  info: {
    title: "API-Calculator",
    version: "2.0",
    description: "API for performing basic arithmetic calculations",
  },
  host: "localhost:8080",
  servers: [
    {
      url: "http://localhost:8080",
      description: "Local development server",
    },
    {
      url: "https://api.example.com",
      description: "Production server",
    },
  ],
  paths: {},
};

const outputFile = "./swagger/swagger_output.json";

async function generateSwaggerJSON() {
  try {
    await swaggerAutogen(outputFile, endpointsFiles, doc);
    console.log("Swagger JSON file has been generated");
  } catch (error) {
    console.error("Error generating Swagger JSON file:", error);
  }
}

generateSwaggerJSON();
