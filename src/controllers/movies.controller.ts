import { Request, Response } from "express";
import { TmoviesPagination } from "../interfaces/movies.interfaces";
import { createMovieService } from "../services/createMovies.services";
import { deleteMovieService } from "../services/deleteMovieService.services";
import { listMoviesService } from "../services/listMovies.services";
import { updateMovieService } from "../services/updateMovie.services";

const getAllMoviesController = async (req: Request, res: Response): Promise<Response> => {
    const page: number | undefined = Number(req.query.page);
    const perPage: number | undefined = Number(req.query.perPage);
    const orderBy: string | undefined = req.query.sort?.toString();
    const order: string | undefined = req.query.order?.toString();

    const movies: TmoviesPagination = await listMoviesService(page, perPage,orderBy,order)
    return res.status(200).json(movies)
}
const createMovieController = async (req: Request, res: Response): Promise<Response> => {
    const movie = await createMovieService(res.locals.validMoviePayload);
    return res.status(201).json(movie);
}
const deleteMovieController = async (req: Request, res: Response): Promise<Response> => {
    await deleteMovieService(Number(req.params.id));
    return res.status(204).send();
}
const updateMovieController = async (req: Request, res: Response): Promise<Response> => {
    const movieUpdate = await updateMovieService(res.locals.validMoviePayload, Number(req.params.id));
    return res.status(200).json(movieUpdate);
}


export {
    getAllMoviesController,
    createMovieController,
    deleteMovieController,
    updateMovieController
}