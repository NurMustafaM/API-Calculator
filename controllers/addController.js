const addModel = require('../models/addModel');

// #swagger.tags = ['Route to add two numbers']
// #swagger.description = 'Endpoint to add two numbers.'
/* #swagger.parameters['a'] = {
    "in": "body",
    "description": "The first number.",
    "schema": { "type": "number" }
} */
/* #swagger.parameters['b'] = {
    "in": "body",
    "description": "The second number.",
    "schema": { "type": "number" }
} */
module.exports = async (req, res, next) => {
  const { a, b } = req.body;

  if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
    return res.status(400).json({
      result: false,
      message: 'Error! The first and second operands must be numbers.'
    });
  }
  /* #swagger.responses[400] = {
    "description": "Invalid input, need to be a number.",
    "schema": {
        "type": "object",
        "properties": {
            "result": { "type": "boolean", "description": "Result of the operation." },
            "message": { "type": "string", "description": "Error message." }
        }
    }
} */

  try {
    const result = await addModel.add(parseFloat(a), parseFloat(b));

    res.json({
      message: 'ok',
      result: result.toString()
    });
    /* #swagger.responses[200] = {
    "description": "Success response.",
    "schema": {
        "type": "object",
        "properties": {
            "result": { "type": "number", "description": "Result of the addition." },
            "message": { "type": "string", "description": "Success message." }
        }
    }
} */
  } catch (error) {
    res.status(500).json({
      result: false,
      message: `An error occurred: ${error.toString()}`
    });
  }
};
/* #swagger.responses[500] = {
    "description": "Internal server error.",
    "schema": {
        "type": "object",
        "properties": {
            "result": { "type": "boolean", "description": "Result of the operation." },
            "message": { "type": "string", "description": "Error message." }
        }
    }
} */
