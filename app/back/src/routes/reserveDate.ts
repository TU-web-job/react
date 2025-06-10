import express, { RequestHandler } from 'express';
import { ReserveDateRequest, ReserveList } from '../types/reserve';
import prisma from '../prisma';

const router = express.Router();

const reserveDateHandler: RequestHandler = async(req, res) => {
    const {userId, reserveDate, reserveStatus, reservePersons, reserveMemo, reserveCourse} = req.body as ReserveDateRequest;

    try{
        const reserveDateList = await prisma.reserve_id.create({
            data: {userId, reserveDate, reserveStatus, reservePersons, reserveMemo, reserveCourse},

        });
        res.status(201).json(reserveDate);
    } catch(err) {
        res.status(500).json({error: '予約に失敗しました。'});
    }
};

router.post('/reserveDate');

const reserveDateFindHandler: RequestHandler = async(req, res, next) => {
    const {userId} = req.body as ReserveList;
    


}

export default router;