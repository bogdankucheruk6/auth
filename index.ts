import express, {Application} from 'express';
import authRouter from './routes';

const PORT: number = 8080;
const app: Application = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server has been started on PORT = ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start().catch(err => console.log(' APPLICATION UNCAUGHT EXCEPTION \r\n ', err));
