const { MongoClient } = require ('mongodb');
const { mongoURL, dbName, collectionName } = require ('../configDB/multiplyConfig');


const connectToMongo = async () => {
  const client = await MongoClient.connect(mongoURL);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return { client, collection };
};

const insertOperation = async (operand1, operand2, resultOperands) => {
  try {
    
    const operation = {
      operand1,
      operand2,
      resultOperands,
      operation: 'subtract',
    };

    await collection.insertOne(operation);
  } catch (error) {
    throw new Error ('Erro ao armazenar no banco de dados');
  } finally {
    client.close();
  }
};

module.exports = {
  insertOperation,
};