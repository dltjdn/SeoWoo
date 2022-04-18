import express, {Router} from 'express';

const router: Router = express.Router();

// router.use('/user', require('./user'));
// router.use('/like', require('./like'));
// router.use('/blog', require('./blog'));
// router.use('/signup', require('./signup'));

const userRouter = require('./user');
const blogRouter = require('./blog');
const signupRouter = require('./signup');
const likeRouter= require('./like');

router.use('/user', userRouter);
router.use('/blog', blogRouter);
router.use('/signup', signupRouter);
router.use('/like', likeRouter);


module.exports = router;