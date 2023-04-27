import { Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { movie, movieCreate, movieUpdate } from "../interfaces/movies.interfaces";

const updateMovieService = async (payload: movieUpdate,idMovie:number): Promise<movie> => {

    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

    const oldMovie: movie | null= await movieRepo.findOneBy({id:idMovie});

    const newMovie: movie = movieRepo.create({
        ...oldMovie,
        ...payload,
    });

    const movieUpdate: movie = await movieRepo.save(newMovie);

    return movieUpdate;
};


export { updateMovieService }