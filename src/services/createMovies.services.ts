import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { movie, movieCreate } from "../interfaces/movies.interfaces";

const createMovieService = async (payload: movieCreate): Promise<movie> => {
    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
    const movie: movieCreate = movieRepo.create(payload);

    const newMovie = await movieRepo.save(movie);

    return newMovie;
};


export { createMovieService }