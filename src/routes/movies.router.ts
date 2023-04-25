import { Router } from "express";
import { createMovieController, getAllMoviesController } from "../controllers/movies.controller";
import { verifyName } from "../middlewares/verifyNameExists.middlewares";
import { verifyPayloadCreateMovie } from "../middlewares/verifyPayload.middleware";



const moviesRouter: Router = Router();


moviesRouter.get('/',getAllMoviesController);
moviesRouter.post('/',verifyPayloadCreateMovie,verifyName,createMovieController);


export default moviesRouter;