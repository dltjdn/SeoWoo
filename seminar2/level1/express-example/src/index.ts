import express, { Request, Response, NextFunction } from 'express';

const app = express(); //express 객체 받아옴

app.use(express.json()); //express에서 request body를 json 으로 받아오겠다

app.use('/api', require('./api'));  //use-> 엔드포인트로 들어오는 모든 요청
//localhost:8000/api -> api폴더
//localhost:8000/api/user -> user.ts

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hi! My name is seowoo! 아아');
}); //get -> http method

app.listen('8002',() => {
    console.log(`
        #############################################
            🛡️ Server listening on port: 8002 🛡️
        #############################################
    `);
});