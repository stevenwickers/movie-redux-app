import styled from 'styled-components'
import LandingImage from '../../assets/LaningImage.png'

export const LoginContainer = styled.div`
    height: 100vh;
    width: 100%;
    color: white;
`

export const BackgroundImageStyles = styled.div`
    background-image: url(${LandingImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.7;
    height: 100vh;
`

export const LoginContainerStyles = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 300px;
    top: 120px;
    background: transparent;
`

export const LoginContainerSpacerStyles = styled.div`
    width: 25%;
    height: 100%;
`

export const LoginSectionStyles = styled.div`
   width: 50%;
   background: black;
`

export const TopSectionStyles = styled.div`
    padding: 25px 15px 5px 15px;
    font-size: x-large;
    text-align: center;
    color: white;
`
export const NotificationSectionStyles = styled.div`
    font-size: smaller;
    padding: 15px;
    background: white;
    color: black;
    margin: 50px 15px 15px 15px;
`

export const LoginButtonStyles = styled.div`
    margin-top: 45px;
    width: 250px;
    padding: 5px;
    justify-self: center;
    text-align-last: center;
    background: #273E49;
    color: #AFBECD;
    border-radius: 25px;
    
    &:hover {
        background: #F1F5F9;
        color: #000000;
    }
`