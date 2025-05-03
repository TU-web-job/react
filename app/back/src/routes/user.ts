import express from 'express';
import pool from '../db';

const router = express.Router();

router.get('/users', async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM users');
        res.json(rows);
    }catch(error){
        console.error(error);
        res.status(500).json({error:'DBエラーです'});
    }
});

export default router;