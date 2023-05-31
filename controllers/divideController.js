const Divide = require("../models/divideModel");

module.exports = async (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      result: false,
      message: "DEU ERRO! O primeiro e o segundo operando deve ser um número",
    });
  }

  try {
    const result = await Divide.divide(a, b);
    
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

