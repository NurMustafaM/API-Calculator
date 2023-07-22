const Subtract = require('../models/subtractModel');
// #swagger.tags = ['Route to subtract two numbers']
// #swagger.description = 'Endpoint to subtract two numbers.'
/* #swagger.parameters['a'] = {
    in: 'path',
    description: 'The first number.',
    schema: { type: 'number' }
} */
/* #swagger.parameters['b'] = {
    in: 'path',
    description: 'The second number.',
    schema: { type: 'number' }
} */
module.exports = async (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      result: false,
      message: 'DEU ERRO! O primeiro e o segundo operando deve ser um número'
    });
  }
/* #swagger.responses[400] = {
    description: 'Invalid input.',
    schema: {
        type: 'object',
        properties: {
            result: { type: 'boolean', description: 'Result of the operation.' },
            message: { type: 'string', description: 'Error message.' }
        }
    }
} */
  try {
    const result = await Subtract.subtract(a, b);

    res.json({
      result: result,
      message: "ok"
    });
/* #swagger.responses[200] = {
    description: 'Success response.',
    schema: {
        type: 'object',
        properties: {
            result: { type: 'number', description: 'Result of the subtraction.' },
            message: { type: 'string', description: 'Success message.' }
        }
    }
} */
  } catch (error) {
    res.status(500).json({
      result: false,
      message: `Ocorreu um erro: ${error.toString()}`
    });
  }
};
/* #swagger.responses[500] = {
    description: 'Internal server error.',
    schema: {
        type: 'object',
        properties: {
            result: { type: 'boolean', description: 'Result of the operation.' },
            message: { type: 'string', description: 'Error message.' }
        }
    }
} */