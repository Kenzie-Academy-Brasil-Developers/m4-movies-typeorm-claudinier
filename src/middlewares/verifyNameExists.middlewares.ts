import { NextFunction, Request, Response } from "express";
import verifyNameExists from "../services/verifyNameExists.services";

const verifyName = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {


    if (req.body.name == null || req.body.name == undefined) {
        return next();
    }

    const nameExists = await verifyNameExists(req.body.name);

    if (nameExists) {
        return res.status(409).json({ message: "Movie already exists." })
    }

    return next();
}

export {
    verifyName
};