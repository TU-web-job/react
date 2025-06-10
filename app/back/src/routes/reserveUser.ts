import express , { RequestHandler } from 'express';
import { ReserveRequest } from '../types/reserve';
import prisma from '../prisma';

const router = express.Router();

const userConfigHandler: RequestHandler = async (req, res) => {
    const {userName, email, password, phoneNumber} = req.body as ReserveRequest;

    try {
        const configUser = await prisma.reserve_user.create({
            data: {userName, email, password, phoneNumber},
        });
        res.status(201).json(configUser);
    } catch(err) {
        res.status(500).json({error: '登録に失敗しました。'});
    }

};

router.post('/reserveUser');
