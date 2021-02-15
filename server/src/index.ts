import cors from 'cors';
import express from 'express';
import { MongoClient } from 'mongodb';
import { config } from 'dotenv';
config();
console.log(process.env.MONGO_URI);
console.log(process.env.DATABASE);

const client = new MongoClient(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const port = 8080;
async function run() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('Connected successfully to server');
  } finally {
  }
}
run().catch(console.dir);
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', async (req, res) => {
  try {
    const col = client.db(process.env.DATABASE).collection('test');
    const query = await col.findOne({});
    res.json({ message: 'Hello', data: query });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
