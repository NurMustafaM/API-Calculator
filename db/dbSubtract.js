const { MongoClient } = require('mongodb');

const mongoURL = 'mongodb://localhost:27017';
const dbName = 'Operations';
const collectionName = 'Subtração';

const connectToMongo = async () => {
  const client = await MongoClient.connect(mongoURL);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return { client, collection };
};

const insertOperation = async (operand1, operand2, resultOperands) => {
  try {
    const { client, collection } = await connectToMongo();

    const operation = {
      operand1,
      operand2,
      resultOperands,
      operation: 'subtract'
    };

    await collection.insertOne(operation);

    client.close();
  } catch (error) {
    throw new Error('Erro ao armazenar no banco de dados');
  }
};

module.exports = {
  insertOperation
};