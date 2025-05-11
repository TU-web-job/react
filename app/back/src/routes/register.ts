import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import prisma from '../prisma';
import { RegisterRequest } from '../types/user';

const router = express.Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_name, email, password } = req.body as RegisterRequest;

        if (!user_name || !email || !password) {
            res.status(400).json({ message: '未入力項目があります。' });
            return;
        }

        const existing = await prisma.users.findUnique({ where: { email } });
        if (existing) {
            res.status(409).json({ message: 'このメールアドレスは登録されています。' });
            return;
        }

        await prisma.users.create({
            data: {
                user_name,
                email,
                password
            },
        });

        res.status(201).json({ message: '登録が完了しました。' });
    } catch (err) {
        next(err);
    }
});

export default router;