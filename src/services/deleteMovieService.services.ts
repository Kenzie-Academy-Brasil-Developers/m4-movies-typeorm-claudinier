import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { movie, movieCreate } from "../interfaces/movies.interfaces";

const deleteMovieService = async (idMovie: number): Promise<void> => {
    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);


    await movieRepo.delete({ id: idMovie });


};


export { deleteMovieService }