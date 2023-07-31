## Calculator API

This project is a calculator API where users can use the endpoint to perform basic mathematical operations such as addition, subtraction, multiplication, and division. Express was used in the development of the API using Node.js and MongoDB.

## How to Use
# Installation

To install and run the API Calculator on another machine, follow the steps below:

1. Clone the repository from GitHub:

```
git clone https://github.com/NurMustafaM/API-Calculator.git
```

2. Navigate to the project directory:

```
cd API-Calculator
```

3. Install the required dependencies using npm:

```
npm install
```

## Configuration

The configuration for the API Calculator is managed through the `config/default.json` file. It contains settings related to Swagger generation and the server's port and timeout. You can customize these settings as per your requirements.

```json
{
    "swagger": {
        "generatefile": true,
        "getDateFormatted": false
    },
    "server": {
        "port": 8080,
        "timeout": 120000
    }
}
```

- `generatefile`: Set this to `true` if you want to generate Swagger JSON files with date in the filename. Set it to `false` if you want Swagger files without a date in the filename.
- `getDateFormatted`: Set this to `true` if you want to include the date in Swagger JSON filenames. This flag is only effective when `generatefile` is set to `true`.

## Running the API

Once the installation and configuration steps are complete, you can start the API Calculator with the following command:

```
npm start
```

The API will be accessible at `http://localhost:8080`. You can use this URL to make API requests.

## Swagger Documentation

If the Swagger JSON file is generated (based on the configuration), you can access the Swagger UI documentation by visiting:

- Swagger UI: `http://localhost:8080/api-docs`

If the Swagger file is not found (based on the configuration), the Swagger UI will not be available, but the API will still work as expected.

## Usage

The API Calculator provides the following routes:

- POST `/add`: Route to add two numbers. Example: `http://localhost:8080/add`
- GET `/subtract/:a/:b`: Route to subtract two numbers. Example: `http://localhost:8080/subtract/10/5`
- GET `/multiply/:a/:b`: Route to multiply two numbers. Example: `http://localhost:8080/multiply/2/3`
- GET `/divide/:a/:b`: Route to divide two numbers. Example: `http://localhost:8080/divide/10/2`

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.

## Acknowledgments

This project was created by Nor. 

Please refer to the [GitHub repository](https://github.com/NurMustafaM/API-Calculator) for more information and updates.


## Help

If you need assistance or have any questions about the project, you can find additional information in the following resources:

1. Express.js documentation: https://expressjs.com/
2. Documentation on specific JavaScript functions and operators: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isFinite, https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
3. Node.js documentation: https://nodejs.org/
4. MongoDB documentation: https://www.mongodb.com/docs/

## Author:

Nor Mustafa Mohamad

Feel free to contact me if you have any questions or suggestions for the project.
