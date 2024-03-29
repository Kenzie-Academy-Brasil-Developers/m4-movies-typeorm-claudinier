import app from './app'
import { AppDataSource } from './data-source'


AppDataSource.initialize().then(async () => {
    console.log("Database connected.");

    const PORT: number = parseInt(process.env.PORT!) || 3000

    app.listen(PORT, async () => {
        console.log(`App running on port ${PORT}`)
    })

}).catch(err => console.log(err));