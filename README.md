# Calculator API

This project is a calculator API where users can use the endpoint to perform basic mathematical operations such as addition, subtraction, multiplication, and division. Express was used in the development of the API using Node.js and MongoDB.

## Features

The calculator API provides the following functionalities:

1. Route to add two numbers: `/add/:a/:b`

2. Route to subtract two numbers: `/subtract/:a/:b`

3. Route to multiply two numbers: `/multiply/:a/:b`

4. Route to divide two numbers: `/divide/:a/:b`

Each route returns the result of the performed operation.

## How to Use

1. Clone the project repository.
2. Install the project dependencies: `npm install`.
3. Start the API server: `npm start` or `npm app.js`.
4. Access the API in your browser or using tools like Insomnia or Postman using the URL: `http://localhost:8000`.
5. The main route `http://localhost:8000` will display the message "Hi! You are accessing a calculator API" and provide information about the available routes.
6. Use the valid routes to perform the desired operations, replacing `:a` and `:b` with the desired numbers. For example, to perform an addition, access the route `http://localhost:8000/add/2/3` to obtain the result of adding 2 and 3.

## Help

If you need assistance or have any questions about the project, you can find additional information in the following resources:

1. Express.js documentation: https://expressjs.com/
2. Documentation on specific JavaScript functions and operators: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isFinite, https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
3. Node.js documentation: https://nodejs.org/
4. MongoDB documentation: https://www.mongodb.com/docs/

## Author:

Nor Mustafa Mohamad

Feel free to contact me if you have any questions or suggestions for the project.
