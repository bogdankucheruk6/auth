import {Router} from 'express';
import {check} from 'express-validator';

import {
    login,
    registration
} from './auth'

const router = Router();

router.post('/registration', [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Минимум 8 символов, максимум 16').isLength({min: 8, max: 16})
], registration);
router.post('/login', [
    check('username', 'Имя пользователя не может быть пустым' ).notEmpty(),
    check('password', 'Минимум 8 символов, максимум 16').isLength({min: 8, max: 16})
], login);

export = router;
