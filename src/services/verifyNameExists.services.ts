import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

const verifyNameExists = async (nameMovie:string): Promise<boolean> => {
    
    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
    
    const movie = await movieRepo.exist({where: {name: nameMovie }});

    console.log(movie);
    

    return movie;
}

export default verifyNameExists;