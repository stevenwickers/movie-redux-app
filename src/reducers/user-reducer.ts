import { ActionTypes, AuthActions } from '../actions/user-actions'
import { ThemeNames } from '../assets/themes'
import { SystemActions, SystemActionTypes } from '../actions/system-actions'

const initialState = {
  theme: ThemeNames.DARK,
  favorites: [],
}

const reducer = (state = initialState, action: AuthActions | SystemActions) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_THEME:
      const currentTheme = state.theme === ThemeNames.DARK
        ? ThemeNames.LIGHT : ThemeNames.DARK

      return {
        ...state,
        theme: currentTheme
      }
    case ActionTypes.SET_FAVORITE:
      const favorite:number = action.payload || -1
      let fs:number[] = [...state.favorites]

      const idx = fs.indexOf(favorite)
      if(idx === -1) {
        fs = [...fs, favorite]
      } else {
        fs = fs.filter(x => x !== favorite)
      }

      return {
        ...state,
        favorites: fs,
      }

    case SystemActionTypes.RESET_STATE:
      return initialState
    default:
      return state
  }
}

export default reducer