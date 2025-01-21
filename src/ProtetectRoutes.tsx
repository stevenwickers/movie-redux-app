import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { AppRoutes } from './config/globals'

type Props = {
  children: any,
  isAuthenticated: boolean,
}

const ProtectedRoutes:FC<Props> = ({ children, isAuthenticated }: Props) => {
  if(!isAuthenticated) {
    return <Navigate to={AppRoutes.Login} replace={true} />
  }
  return children
}

export default ProtectedRoutes