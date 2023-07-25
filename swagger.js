const swaggerAutogen = require("swagger-autogen")();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const app = require('./app');

const application = express();
const port = 3000;

const swaggerOutputDir = "./swagger";
const swaggerOutputFileName = `swagger_output_${getDateFormatted()}.json`;
const swaggerOutputFile = `${swaggerOutputDir}/${swaggerOutputFileName}`;

let swaggerDocument = {};

const endpointsFiles = ["./routes/routes.js"];

function generateSwagger(endpointsFiles) {
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

  swaggerAutogen(swaggerOutputFile, endpointsFiles, doc)
    .then(() => {
      console.log("Swagger JSON file has been generated");
      // Start the server and serve the Swagger UI after generating the Swagger JSON
      startServer();
    })
    .catch((error) => {
      console.error("Error generating Swagger JSON file:", error);
    });
}

function startServer() {
  // Check if the Swagger JSON file exists
  if (fs.existsSync(swaggerOutputFile)) {
    swaggerDocument = require(`./${swaggerOutputFile}`);
  } else {
    console.log(`Swagger file '${swaggerOutputFile}' does not exist. Generating new file...`);
    generateSwagger(endpointsFiles);
  }

  application.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  const server = application.listen(port, () => {
    console.log(`Swagger UI is available at http://localhost:${server.address().port}/api-docs`);
  });
}

generateSwagger(endpointsFiles); // Start the process by generating the Swagger JSON

function getDateFormatted() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${day}_${month}_${year}`;
}
