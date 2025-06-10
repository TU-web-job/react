import express from 'express';
import cors from 'cors';
import registerRouter from './routes/register';
import loginRouter from './routes/login';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', registerRouter);
app.use('/api', loginRouter);
app.use('api/');

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
});