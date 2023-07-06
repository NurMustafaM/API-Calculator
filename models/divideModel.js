const {insertOperation} = require('../db/dbDivide');

module.exports = {
    divide:async (a,b) => {
        const result = a / b;
        await insertOperation (a,b,result);
        return result;
    }
};

