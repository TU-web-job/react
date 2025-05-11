import express from 'express';
import { RequestHandler } from 'express';
import prisma from '../prisma';
import { LoginRequest, RegisterRequest } from '../types/user';

const router = express.Router();

router.post('/register', async(req, res) => {
    const { user_name, email, password, address, phone_number} = req.body as RegisterRequest;

    try {
        const newUser = await prisma.users.create({
            data: {user_name, email, password, address, phone_number},
        });
        res.status(201).json(newUser);
    } catch(err) {
        res.status(500).json({error: '登録に失敗しました。'});
    }
});

const loginHandler: RequestHandler =  async(req, res, next) => {
    const { email, password } = req.body as LoginRequest;
    
    try {
        const user = await prisma.users.findUnique({
            where: {email},
        });
        if(!user || !email || user.password !== password) {
            res.status(401).json({message: 'メールアドレスかパスワードが間違っています。'});
            return;
        }
        res.status(200).json({message: 'Success!', id: user.id});
    } catch(err){
        next(err);
        
    }
};

router.post('/login', loginHandler)

const resultHandler: RequestHandler = async(req, res) => {
    const userId = Number(req.params.id);

    try{
        const user = await prisma.users.findUnique({
            where: {id: userId},
        });
        if(!user) {
            res.status(404).json({error: 'ユーザーが見つかりません'});
            return;
        }

        res.json(user);
    }catch (err) {
        res.status(500).json({error: 'ユーザー情報取得エラー'});
    }
};

router.get('/:id', resultHandler);

export default router;