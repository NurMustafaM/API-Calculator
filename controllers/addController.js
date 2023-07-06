const addModel = require('../models/addModel');

module.exports = async (req, res, next) => {
  const { a, b } = req.body;

  if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
    return res.status(400).json({
      result: false,
      message: 'Erro! O primeiro e o segundo operando devem ser números.'
    });
  }

  try {
    const result = await addModel.add(parseFloat(a), parseFloat(b));

    res.json({
      message: 'ok',
      result: result.toString()
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      message: `Ocorreu um erro: ${error.toString()}`
    });
  }
};
