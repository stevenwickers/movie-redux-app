import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchToken } from '../../actionQueries/system-queries'
import { useNavigate } from 'react-router-dom'
import { LoginContainer, LoginContainerStyles, LoginButtonStyles, LoginContainerSpacerStyles, LoginSectionStyles, TopSectionStyles, NotificationSectionStyles, BackgroundImageStyles } from './Login.styled'
import { AppRoutes } from '../../config/globals'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleLoginClick = () => {
    fetchToken(dispatch).then(() => {
      console.log('navigating')
      navigate(AppRoutes.Gallery, { replace: true })
    }).catch(error => {
      console.error(error)
      setError(error)
    })

  }

  if(error) throw error
  return (
    <LoginContainer>
      <BackgroundImageStyles>
        <LoginContainerStyles>
          <LoginContainerSpacerStyles />
          <LoginSectionStyles>
            <TopSectionStyles>
              Movie Redux Platform
            </TopSectionStyles>
            <LoginButtonStyles onClick={handleLoginClick}>
              Login
            </LoginButtonStyles>
            <NotificationSectionStyles>
              Note: You must be running the Move Node Server to be
              able to login. If you don't have the application
              please download &nbsp;
              <a href='https://github.com/stevenwickers/movie-node-server' target='blank'>here</a>.
            </NotificationSectionStyles>
          </LoginSectionStyles>
        </LoginContainerStyles>
      </BackgroundImageStyles>
    </LoginContainer>
  )
}

export default Login

