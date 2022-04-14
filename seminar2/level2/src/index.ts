import express, {Request, Response, NextFunction} from 'express';

const app = express();

app.use(express.json());

app.use('/api', require('./api'));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('seminar2 - level2 <br> express 프로젝트 만들고 라우팅 분기해보기');
});

app.listen('8003',() => {
    console.log(`
        #############################################
            🛡️ Server listening on port: 8003 🛡️
        #############################################
    `);
});