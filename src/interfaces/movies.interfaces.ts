import {z} from "zod";
import { validMovie, validMovieRegister, validMovieUpdate } from "../schemas/movies.schemas";

type movie  = z.infer<typeof validMovie>;

type movieUpdate  = z.infer<typeof validMovieUpdate>;

type movieCreate  = z.infer<typeof validMovieRegister>;

export{
    movie,
    movieCreate,
    movieUpdate
}