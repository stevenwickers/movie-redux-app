import { createAction } from '@reduxjs/toolkit'

export enum ActionTypes {
    LOAD_MOVIES = 'LOAD_MOVIES',
    SET_SELECTED_GENRE = 'SET_SELECTED_GENRE',
}

interface LoadMovies { type: ActionTypes.LOAD_MOVIES, payload: any[] }
interface SetSelectedGender { type: ActionTypes.SET_SELECTED_GENRE, payload: string}

export type MovieActions =
    | LoadMovies
    | SetSelectedGender

export const loadMovies = createAction(ActionTypes.LOAD_MOVIES)
export const setSelectedGender = createAction<string>(ActionTypes.SET_SELECTED_GENRE)
