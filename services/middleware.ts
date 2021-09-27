import {NextFunction} from "express";

export default (handler: any) => {
    return async (req: any, res: any, next: NextFunction) => {
        try {
            await handler(req, res, next);
        } catch (e: any) {
            if (!e.statusCode) {
                res.status(500).send({ ERROR: e.message });
            } else {
                res.status(e.statusCode).send({ ERROR: e.message_text });
            }
        }
    };
};
