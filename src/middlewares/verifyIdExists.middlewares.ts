import { NextFunction, Request, Response } from "express";
import verifyIdExists from "../services/verifyIdExists.services";
import verifyNameExists from "../services/verifyNameExists.services";

const verifyid = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const idExists = await verifyIdExists(Number(req.params.id));

    if (idExists) {
        return next();
    }
    return res.status(404).json({ message: 'Movie not found' });


}

export {
    verifyid
};