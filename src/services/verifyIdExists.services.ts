import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

const verifyIdExists = async (idMovie:number): Promise<boolean> => {
    
    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
    
    const movie = await movieRepo.exist({where: {id: idMovie }});

    return movie;
}

export default verifyIdExists;