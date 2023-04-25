import { NextFunction, Request, Response } from "express";
import { validMovieRegister } from "../schemas/movies.schemas";

const verifyPayloadCreateMovie = async (req: Request, res: Response, next: NextFunction) => {


    const payloadIsValid = validMovieRegister.safeParse(req.body);
    if (!payloadIsValid.success) {
        const errs = payloadIsValid.error.flatten().fieldErrors;
        return res.status(400).json(errs);
    }
    const validMovie = validMovieRegister.parse(req.body);
    res.locals.validMoviePayload = validMovie;

    return next();



}


export {
    verifyPayloadCreateMovie
}