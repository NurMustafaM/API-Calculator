const { insertOperation } = require("../db/dbDivide");

module.exports = async (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      result: false,
      message: "DEU ERRO! O primeiro e o segundo operando deve ser um número",
    });
  }

  const result = a / b;

  try {
    await insertOperation(a, b, result);

    if (!isFinite(result)) {
      throw new Error("Infinity");
    }

    res.json({
      result: true,
      message: `Deu tudo certo na divisão!! A divisão de ${a} / ${b} = ${result}`,
    });
  } catch (error) {
    if (error.message === "Infinity") {
      return res.status(400).json({
        result: false,
        message: `DEU ERRO! O resultado da divisão é ${result}`,
      });
      
    }
    res.status(500).json({
      result: false,
      message: `Ocorreu um erro: ${error.toString()}`,
    });
  }
};

