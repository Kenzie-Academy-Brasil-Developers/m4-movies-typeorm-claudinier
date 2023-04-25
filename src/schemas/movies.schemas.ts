import { z } from "zod";

const validMovie = z.object({
    id: z.number().int(),
    name: z.string().nonempty().max(50),
    description: z.string().nullable().optional(),
    duration: z.number().int().min(1,{message:"Number must be greater than 0"}),
    price: z.number().int()
});
const validMovieRegister = validMovie.omit({id: true}).partial({description:true})
const validMovieUpdate = validMovieRegister.partial();

export {
    validMovie,
    validMovieRegister,
    validMovieUpdate
}