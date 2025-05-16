import express from 'express';
import  { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async(req, res) => {
    try{
        const user = await prisma.users.findMany();
        res.json(user);
    }catch (err) {
        res.status(500).json({error: 'サーバーエラー'});
    }
});

export default router;