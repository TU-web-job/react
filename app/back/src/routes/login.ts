import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import prisma from '../prisma';
import { LoginRequest } from '../types/user';

const router = express.Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body as LoginRequest;

        if (!email || !password) {
            res.status(400).json({ message: 'メールアドレスとパスワードを入力してください。' });
            return;
        }

        const user = await prisma.users.findUnique({ where: { email } });
        if (!user) {
            res.status(401).json({ message: 'ユーザーが存在しません。' });
            return;
        }

        res.status(200).json({ message: 'ログイン成功', userId: user.id });
    } catch (error) {
        next(error);
    }
});

export default router;