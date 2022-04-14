import express,{ Request, Response, Router} from 'express';

const router:Router = express.Router();


router.get('/', (req: Request,res: Response) => {
    return res.status(500).json({
        status: 500,
        message: '좋아요 실패  - 서버 내부 오류'
    });
});

module.exports = router;