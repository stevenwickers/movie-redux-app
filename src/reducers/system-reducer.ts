import { SystemActions, SystemActionTypes } from '../actions/system-actions'
import { PageNameEnums } from '../config/globals'

const initialState = {
  token: '',
  currentPage: PageNameEnums.Gallery,
  paneOpen: false,
}

const reducer = (state = initialState, action: SystemActions ) => {
  switch(action.type) {
    case SystemActionTypes.LOAD_TOKEN:
      const token = action.payload
      return {
        ...state,
        token: token
      }
    case SystemActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case SystemActionTypes.TOGGLE_USER_PANEL:
      return {
        ...state,
        paneOpen: !state.paneOpen
      }
    case SystemActionTypes.CLOSE_USER_PROFILE:
      return {
        ...state,
        paneOpen: false,
      }
    case SystemActionTypes.LOGOUT_USER:
      return {
        ...state,
        token: '',
      }
    case SystemActionTypes.RESET_STATE:
      return initialState
    default: return state
  }
}

export default reducer