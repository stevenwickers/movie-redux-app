import { FC } from 'react'
import { ErrorCodes } from '../../config/globals'
import { ErrorContainer, ErrorSectionStyles, BackgroundImageStyles } from './ErrorPage.styled'
import { ButtonAreaStyles, ButtonInstructionStyles, ButtonStyles } from './ErrorPage.styled.buttons'

interface Props {
  error?: any
}

const ErrorPage:FC<Props>= ({ error }:Props) => {

  const navigateToLogin = () => {
    window.location.reload()
  }

  return (
    <ErrorContainer>
      <BackgroundImageStyles>
      Error Code: {error}
        <ErrorSectionStyles>
        1. {ErrorCodes.NETWORK_ERROR}
          <div>
            <ul>
              <li>You are not running Movie Node Server or the server has stopped</li>
              <li>Movie Node Server runs on port: 3005. Make sure nothing is running on this port or change the port in source code</li>
              <li>If you don't have the Movie Node Server, download the source from here: </li>
            </ul>
          </div>
        </ErrorSectionStyles>
        <ErrorSectionStyles>
        2. {ErrorCodes.GENERIC_ERROR}
          <div>
            <ul>
              <li>This application runs on port: 3000. Make sure nothing is running on this port or change the port in source code</li>
            </ul>
          </div>
        </ErrorSectionStyles>
        <ButtonAreaStyles>
          <ButtonInstructionStyles>
          Fix issues and login
          </ButtonInstructionStyles>
          <ButtonStyles onClick={navigateToLogin}>Login</ButtonStyles>
        </ButtonAreaStyles>
      </BackgroundImageStyles>
    </ErrorContainer>
  )
}

export default ErrorPage

