import styled from 'styled-components'
import NetworkImage from '../../assets/NetworkError.png'

export const ErrorContainer = styled.div`
    height: 100vh;
    width: 100%;
    color: black;
    padding: 15px;
`

export const BackgroundImageStyles = styled.div`
    background-image: url(${NetworkImage});
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.7;
    height: 100vh;
`

export const ErrorSectionStyles = styled.div`
    padding-top: 15px;
`