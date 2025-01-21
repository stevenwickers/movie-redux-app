import { RootReducer } from '../reducers'
import { MovieType } from '../models/movie-models'

/* User Selectors */
export const selectTheme = (state: RootReducer) => state.user.theme
export const selectMovieFavorites = (state: RootReducer):number[] => state.user.favorites

/*System*/
export const selectToken = (state: RootReducer) => state.system.token
export const selectAuthenticated = (state: RootReducer): boolean => state.system.token.length > 0 || false
export const selectUserPanelState = (state: RootReducer):boolean => state.system.paneOpen
export const selectCurrentPage = (state: RootReducer): string => state.system.currentPage

/* Movie Selectors*/
export const selectMovies = (state: RootReducer):MovieType[] => state.movies.data || []
export const selectMovieCount = (state: RootReducer):number => state.movies.count
export const selectSelGenre = (state: RootReducer) => state.movies.selectedGenre || ''

