import { NextFunction, Request, Response } from "express";
import { validMovieRegister, validMovieUpdate } from "../schemas/movies.schemas";

const verifyPayloadCreateMovie = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {


    const payloadIsValid = validMovieRegister.safeParse(req.body);
    if (!payloadIsValid.success) {
        const errs = payloadIsValid.error.flatten().fieldErrors;
        return res.status(400).json({ message: errs });
    }
    const validMovie = validMovieRegister.parse(req.body);
    res.locals.validMoviePayload = validMovie;

    return next();



}
const verifyPayloadUpdateMovie = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {


    const payloadIsValid = validMovieUpdate.safeParse(req.body);
    if (!payloadIsValid.success) {
        const errs = payloadIsValid.error.flatten().fieldErrors;
        return res.status(400).json({ message: errs });
    }
    const validMovie = validMovieUpdate.parse(req.body);
    res.locals.validMoviePayload = validMovie;

    return next();



}


export {
    verifyPayloadCreateMovie,
    verifyPayloadUpdateMovie,
}