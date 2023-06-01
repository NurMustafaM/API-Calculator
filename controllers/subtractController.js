const Subtract = require('../models/subtractModel');

module.exports = async (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      result: false,
      message: 'DEU ERRO! O primeiro e o segundo operando deve ser um número'
    });
  }

  try {
    const result = await Subtract.subtract(a, b);

    res.json({
      result: result,
      message: "ok"
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      message: `Ocorreu um erro: ${error.toString()}`
    });
  }
};

