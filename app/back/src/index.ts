import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helloRouter from './routes/hello';
import userRouter from './routes/user';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/hello', helloRouter);
app.use('/api', userRouter);
app.use('/api/register',userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
