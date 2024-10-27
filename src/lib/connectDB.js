const { MongoClient, ServerApiVersion } = require("mongodb");

let db;

const connectDB = async () => {
  if (db) return db;

  const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DATABASE_NAME}:${process.env.NEXT_PUBLIC_DATABASE_PASS}@cluster0.dqs9o84.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    db = client.db("todoDB");
    return db;
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
