import express, {Request, Response, Router} from 'express';
// express 모듈에서 (express -> router 객체 만들기 위해), ({request, response, router} -> 타입 정의를 위해) 불러옴!

// express의 라우팅 시스템
const router: Router = express.Router();


router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        status:200,
        message:'유저 조회 성공'
    })
})

// 생성한 router 객체를 모듈로 반환
module.exports = router;