import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchMovies } from '../actionQueries/movie-queries'
import { AppRoutes } from '../config/globals'
import styled from 'styled-components'
import * as Selectors from '../selectors'

const Home = () => {
  const dispatch = useDispatch()
  const token = useSelector(Selectors.selectToken)
  const movies = useSelector(Selectors.selectMovies)

  // @ts-ignore
  useEffect(() => {
    if(token.length === 0 || movies.length > 0) return
    (async () => {
      await fetchMovies(dispatch, token)
    })()
    return <Navigate to={AppRoutes.Gallery} replace={true} />
  }, [token, movies])

  return (
    <HomContainerStyles>
      Loading....
    </HomContainerStyles>
  )

}

export default Home

const HomContainerStyles = styled.div`
    background-color: greenyellow;
    color: white;
    width: 100%;
    height: calc(100vh - 100px);
`

