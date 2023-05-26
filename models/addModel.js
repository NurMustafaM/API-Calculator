const {insertOperation} = require ('../db/dbAdd');

module.exports = {
    add:async (a, b) => {
        const result = a + b;
        await insertOperation (a, b, result);
        return result;
    }
};