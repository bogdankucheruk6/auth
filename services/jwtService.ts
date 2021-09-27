import jwt from 'jsonwebtoken';

export = (id: number) => {
    const payload = {
        id
    }

    return jwt.sign(payload, 'secret', {expiresIn: '24h'});
}