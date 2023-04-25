import { Request, Response } from "express";
import { createMovieService } from "../services/createMovies.services";

const getAllMoviesController =  async (req:Request,res: Response): Promise<Response> =>{
    return res.send(200);
}
const createMovieController =  async (req:Request,res: Response): Promise<Response> =>{
    const movie = await createMovieService(res.locals.validMoviePayload);
    return res.status(201).json(movie);
}


export {
    getAllMoviesController,
    createMovieController
}