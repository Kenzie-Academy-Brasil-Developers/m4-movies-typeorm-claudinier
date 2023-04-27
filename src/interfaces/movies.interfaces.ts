import { DeepPartial } from "typeorm";
import {z} from "zod";
import { validMovie, validMovieRegister, validMovieUpdate } from "../schemas/movies.schemas";





type movie = z.infer<typeof validMovie>;

type movieCreate = z.infer<typeof validMovieRegister>;

type movieUpdate = DeepPartial<movieCreate>;

type TmoviesPagination = {
    prevPage: string | null
    nextPage: string | null
    count: number
    data: movie[]
}

export{
    movie,
    movieCreate,
    movieUpdate,
    TmoviesPagination
}