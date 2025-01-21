import { createAction } from '@reduxjs/toolkit'

export enum SystemActionTypes {
  LOAD_TOKEN = 'LOAD_TOKEN',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  TOGGLE_USER_PANEL = 'TOGGLE_USER_PANEL',
  CLOSE_USER_PROFILE = 'CLOSE_USER_PROFILE',
  LOGOUT_USER = 'LOGOUT_USER',
  RESET_STATE = 'RESET_STATE',
}

interface LoadToken { type: SystemActionTypes.LOAD_TOKEN, payload: string }
interface SetCurrentPage { type: SystemActionTypes.SET_CURRENT_PAGE, payload: string }
interface ToggleUserPanelState { type: SystemActionTypes.TOGGLE_USER_PANEL }
interface CloseUserPanel { type: SystemActionTypes.CLOSE_USER_PROFILE }
interface LogoutUser { type: SystemActionTypes.LOGOUT_USER}
interface ResetState { type: SystemActionTypes.RESET_STATE }

export type SystemActions =
  | LoadToken
  | SetCurrentPage
  | ToggleUserPanelState
  | CloseUserPanel
  | LogoutUser
  | ResetState

export const loadToken = createAction<string>(SystemActionTypes.LOAD_TOKEN)
export const setCurrentPage = createAction<string>(SystemActionTypes.SET_CURRENT_PAGE)
export const toggleUserPanelState = createAction(SystemActionTypes.TOGGLE_USER_PANEL)
export const closeUserPanel = createAction(SystemActionTypes.CLOSE_USER_PROFILE)
export const logoutUser = createAction(SystemActionTypes.LOGOUT_USER)
export const resetState = createAction(SystemActionTypes.RESET_STATE)