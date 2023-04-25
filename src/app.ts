import express, { Application, json } from 'express';
import moviesRouter from './routes/movies.router';

const app: Application = express()
app.use(json())

app.use('/movies',moviesRouter);


export default app
