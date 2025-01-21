import { combineReducers } from 'redux'
import movies from './movie-reducer'
import user from './user-reducer'
import system from './system-reducer'

const rootReducer = combineReducers({
  movies,
  user,
  system,
})

export type RootReducer = ReturnType<typeof rootReducer>
export default rootReducer