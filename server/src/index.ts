import cors from 'cors';
import express from 'express';
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Hello' });
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
