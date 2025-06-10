import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/users';
import reserveRouter from './routes/reserveDate';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/reserve', reserveRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});