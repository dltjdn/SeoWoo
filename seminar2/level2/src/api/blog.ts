import express, { Response, Request, Router} from 'express';


const router: Router = express.Router();
let blog_count: number = 0;

router.get('/', (req: Request, res: Response) => {
    blog_count++;
    
    return res.status(200).json({
        status:200,
        message: `${blog_count}번째 글 작성 완료`
    });
});

module.exports = router;