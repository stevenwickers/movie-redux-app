import { MovieActions, ActionTypes } from '../actions/movie-action'
import { SystemActions, SystemActionTypes } from '../actions/system-actions'

const initialState = {
  count: 0,
  data: [],
  selectedGenre: '',
}

const reducer = (state = initialState, action: MovieActions | SystemActions ) => {
  switch(action.type) {
    case ActionTypes.LOAD_MOVIES:
      const movies = action.payload || []
      return {
        ...state,
        data: movies,
        count: movies.length,
      }
    case ActionTypes.SET_SELECTED_GENRE:
      return {
        ...state,
        selectedGenre: action.payload,
      }
    case SystemActionTypes.RESET_STATE:
      return initialState
    default: return state
  }
}

export default reducer