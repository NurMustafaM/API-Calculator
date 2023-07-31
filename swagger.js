const swaggerAutogen = require("swagger-autogen")();
const fs = require('fs');
const config = require ('./config/default.json');

const endpointsFiles = ["./routes/routes.js"];

const autonomousUpload = config.swagger.generatefile;
const includeDate = config.swagger.getDateFormatted; 

const swaggerOutputDir = "./swagger";
const swaggerOutputFileName = `swagger_output${autonomousUpload && includeDate ? `_${getDateFormatted()}` : ''}.json`; // Include the date if both flags are true
const swaggerOutputFile = `${swaggerOutputDir}/${swaggerOutputFileName}`;

function generateSwagger(endpointsFiles, autonomousUpload) {
  if (!autonomousUpload) {
    console.log("Autonomous upload is disabled. Skipping Swagger JSON generation.");
    return;
  }

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
    })
    .catch((error) => {
      console.error("Error generating Swagger JSON file:", error);
    });
}

function getDateFormatted() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${day}_${month}_${year}`;
}

generateSwagger(endpointsFiles, autonomousUpload);
