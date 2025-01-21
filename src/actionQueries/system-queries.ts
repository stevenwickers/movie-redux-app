import { getData } from '../data/data-serverice'
import * as SystemActions from '../actions/system-actions'

export enum Endpoints {
    AUTH = 'auth'
}

export const fetchToken = async (dispatch: any) => {
  await getData(Endpoints.AUTH, SystemActions.loadToken, dispatch)
}

