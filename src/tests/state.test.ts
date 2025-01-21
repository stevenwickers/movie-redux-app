import store from '../store/index'
import sourceData from './setup/data.json'
import * as MovieActions from '../actions/movie-action'
import * as SystemActions from '../actions/system-actions'

describe('state', () => {
  it('should return token', () => {
    const token = 'ABCD1234'
    store.dispatch(SystemActions.loadToken(token))

    const tokenState = store.getState().system.token || ''
    expect(tokenState).toEqual(token)
  })

  it('should return movies', () => {
    // @ts-ignore
    store.dispatch(MovieActions.loadMovies(sourceData))

    const movie_cnt = store.getState().movies?.count || 0
    expect(movie_cnt).toEqual(5)
  })

})

