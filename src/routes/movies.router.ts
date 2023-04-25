import { Router } from "express";
import { createMovieController, getAllMoviesController } from "../controllers/movies.controller";
import { verifyPayloadCreateMovie } from "../middlewares/verifyPayload.middleware";


const moviesRouter: Router = Router();


moviesRouter.get('/',getAllMoviesController);
moviesRouter.post('/',verifyPayloadCreateMovie,createMovieController);


export default moviesRouter;