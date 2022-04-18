import express, {Router} from 'express';

const router: Router = express.Router();

// /???/user 엔드포인트에 요청이 들어오면 user.ts파일 실행
router.use('/user', require('./user'));

module.exports = router;