const Multiply = require('../models/multiplyModel');

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
    const result = await multiply(a, b);

    res.json({
      result: true,
      message: `Deu tudo certo na multiplicação!! A multiplicação de ${a} x ${b} = ${result}`
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      message: `Ocorreu um erro: ${error.toString()}`
    });
  }
};

