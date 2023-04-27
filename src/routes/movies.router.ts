import { Router } from "express";
import { createMovieController, deleteMovieController, getAllMoviesController, updateMovieController } from "../controllers/movies.controller";
import { verifyid } from "../middlewares/verifyIdExists.middlewares";
import { verifyName } from "../middlewares/verifyNameExists.middlewares";
import { verifyPayloadCreateMovie, verifyPayloadUpdateMovie } from "../middlewares/verifyPayload.middleware";



const moviesRouter: Router = Router();


moviesRouter.get('/',getAllMoviesController);
moviesRouter.post('/',verifyPayloadCreateMovie,verifyName,createMovieController);
moviesRouter.delete('/:id',verifyid,deleteMovieController);
moviesRouter.patch('/:id',verifyid,verifyPayloadUpdateMovie,verifyName,updateMovieController);


export default moviesRouter;