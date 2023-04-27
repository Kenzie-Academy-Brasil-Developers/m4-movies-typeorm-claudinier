import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { movie, TmoviesPagination } from "../interfaces/movies.interfaces"

const listMoviesService = async (
    page: number | undefined,
    perPage: number | undefined,
    orderBy: string | undefined,
    orderParam: string | undefined
): Promise<TmoviesPagination> => {
    const movieRepository: Repository<movie> = AppDataSource.getRepository(Movie)
    let movies: movie[] | undefined
    let orderObj = {}

    if (orderParam == 'asc' || orderParam == 'desc') { } else {        
        orderParam = 'asc'
    }
    if(orderBy == undefined){
        orderParam = 'asc'
    }

    if (orderBy === 'price') {
        orderObj = {
            price: orderParam
        }
    } else if (orderBy === 'duration') {
        orderObj = {
            duration: orderParam
        }
    } else {
        orderObj = {
            id: orderParam
        }
    }

    if (!page || page <= 0) {
        page = 1;
    }
    if (!perPage || perPage <= 0 || perPage > 5) {
        perPage = 5;
    }

    if (!page || !perPage) {
        movies = await movieRepository.find({
            order: orderObj
        })
    } else {
        movies = await movieRepository.find({
            skip: (page - 1) * perPage,
            take: perPage,
            order: orderObj,
        })
    }

    const countNum = await movieRepository.count()
    const prevPageNum = page - 1;
    const nextPageNum = page <= countNum ? page + 1 : page;

    let prevPageLink: string | null = null;
    let nextPageLink: string | null = null;

    if (page <= (countNum / perPage)) {
        nextPageLink = `http://localhost:3000/movies?page=${nextPageNum}&perPage=${perPage}`;
    }
    if (page >= 2) {
        prevPageLink = `http://localhost:3000/movies?page=${prevPageNum}&perPage=${perPage}`;
    }
    return {
        nextPage: nextPageLink,
        prevPage: prevPageLink,
        count: countNum,
        data: movies,
    }
}

export {
    listMoviesService
}