import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helloRouter from './routes/hello';
import userRouter from './routes/user';
import pool from './db';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {
    const{userName, email, password } = req.body;
    console.log('get:' , req.body);
    try{
        const sql = 'INSERT INTO users (userName, email, password) VALUES (?, ?, ?)';
        const [result] = await pool.execute(sql,[userName, email, password]);
        res.json({ message: 'ユーザー登録が完了しました' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '登録に失敗しました' });
    }
});

app.use('/api/hello', helloRouter);
app.use('/api', userRouter);
app.use('/api/register',userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
