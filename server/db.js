import { MongoClient, ServerApiVersion } from "mongodb";

const uri = 'mongodb+srv://admin:o3OqxkABlJWHrdq3@cluster0.amj6yvy.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'appData'

const client = new MongoClient(uri, {
    serverApi: {
        useNewUrlParser: true,
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectDB() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("MongoDB connection successful.");
    } catch (error) {
        console.error('Failed to connect to MongoDB: ', error);
    }
}

function getDB() { return client.db(dbName) };

export { connectDB, getDB }
