import { getData } from '../data/data-serverice'
import * as MovieActions from '../actions/movie-action'

export const MOVIE_ENDPOINT = 'movies'

export const fetchMovies = async (dispatch: any, token:string) => {
  await getData(MOVIE_ENDPOINT, MovieActions.loadMovies, dispatch, token)
}