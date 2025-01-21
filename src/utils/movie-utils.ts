import { MovieType } from '../models/movie-models'

export const getMovieGenres = (movies:MovieType[]):string[] => {
  let movieGenres:string[] = []

  movies.forEach((movie:MovieType) => {
    movieGenres = [...movieGenres, ...movie.genre]
  })

  //Remove all duplicate values with Set
  const uniqueGenres = [...new Set(movieGenres)]

  return uniqueGenres.sort()
}
