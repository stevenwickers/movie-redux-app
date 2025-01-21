import { createAction } from '@reduxjs/toolkit'

export enum ActionTypes {
  TOGGLE_THEME = 'TOGGLE_THEME',
  SET_FAVORITE = 'SET_FAVORITE',
}

interface ToggleTheme { type: ActionTypes.TOGGLE_THEME }
interface SetFavorite { type: ActionTypes.SET_FAVORITE, payload: number }

export type AuthActions =
  | ToggleTheme
  | SetFavorite

export const toggleTheme = createAction(ActionTypes.TOGGLE_THEME)
export const setFavorite = createAction<number>(ActionTypes.SET_FAVORITE)