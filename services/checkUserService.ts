// import jwt from 'jsonwebtoken';
// import {NextFunction} from "express";
//
// export = (req: any, res: any, next: NextFunction) => {
//     try {
//         const token: string = req.headers.authorization.split(' ')[1];
//
//         if (!token) {
//             res.status(400).json({message: 'Пользователь не авторизован'});
//         }
//
//         const decodedData = jwt.verify(token, 'secret');
//
//         req.user = decodedData;
//         next();
//     } catch (e) {
//         console.log(e);
//         return res.status(400).json({message: 'Пользователь не авторизован'});
//     }
// }