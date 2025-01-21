import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../config/globals'
import * as Selectors from '../selectors'

const useIsAuthenticated = () => {
  const navigate = useNavigate()
  const isAuthenticated = useSelector(Selectors.selectAuthenticated)

  useEffect(() => {
    if(!isAuthenticated) {
      navigate(AppRoutes.Login, { replace: true })
    }
  }, [isAuthenticated, navigate])

  return isAuthenticated
}

export default useIsAuthenticated