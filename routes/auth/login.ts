import bcrypt from 'bcryptjs';
import db from '../../db';
import generateAccessToken from '../../services/jwtService';
import {QueryResult} from "pg";
import middleware from "../../services/middleware";
import IUser from "./interfaces/iUser";

export default middleware(async (req: any, res: any) => {
    const {username, password}: any = req.body;
    const userQueryResult: QueryResult<IUser> = await db.query('SELECT * FROM person WHERE username = $1', [username]);
    const user = userQueryResult.rows[0];

    if (!user) {
        return res.status(400).json({message: 'Пользователь не найден'});
    }

    const validPassword: boolean = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
        return res.status(400).json({message: 'Введен неверный пароль'});
    }

    const token: string = generateAccessToken(user.id);
    const userResult = {token, user: {id: user.id, username: user.username} };

    return res.json(userResult);
});
