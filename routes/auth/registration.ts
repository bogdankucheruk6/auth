import {validationResult} from "express-validator";
import db from '../../db';
import bcrypt from 'bcryptjs';
import middleware from "../../services/middleware";

export default middleware(async (req: any, res: any) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({message: 'Ошибка при регистрации', errors});
    }

    const {username, password} = req.body;
    const hashPassword: string = bcrypt.hashSync(password, 7);

    await db.query('INSERT INTO person(username, password) VALUES($1, $2)', [username, hashPassword]);

    return res.json({message: 'Пользователь успешно зарегестрирован'});
});