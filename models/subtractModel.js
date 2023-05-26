const {insertOperation} = require('../db/dbSubtract');

module.exports = {
    subtract:async (a,b) => {
        const result = a - b;
        await insertOperation (a,b,result);
        return result;
    }
};