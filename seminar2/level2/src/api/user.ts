import express, { Request, Response, Router} from 'express';

const router: Router = express.Router();

router.get('/', (req: Request,res: Response) => {
    return res.status(404).json({
        status: 404,
        message: '유저를 찾을 수 없습니다'
    });
});

module.exports = router;