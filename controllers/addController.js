const Add = require('../models/addModel');

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
    const result = await Add.add(a, b);

    res.json({
      result: true,
      message: `Deu tudo certo na soma!! A soma de ${a} + ${b} = ${result}`
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      message: `Ocorreu um erro: ${error.toString()}`
    });
  }
};

