const {insertOperation} = require('../db/dbMultiply');

module.exports = {
    multiply:async (a,b) => {
        const result = a * b;
        await insertOperation (a,b,result);
        return result;
    }
};

