const swaggerAutogen = require("swagger-autogen")();
const fs = require('fs');
const endpointsFiles = ["./routes/routes.js"];

const swaggerOutputDir = "./swagger";
const swaggerOutputFileName = "swagger_output.json";
const swaggerOutputFile = `${swaggerOutputDir}/${swaggerOutputFileName}`;


const autonomousUpload = false; // Defina como 'true' para habilitar ou 'false' para desabilitar

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

generateSwagger(endpointsFiles, autonomousUpload); // Generate the Swagger JSON

function getDateFormatted() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${day}${month}${year}`;
}
