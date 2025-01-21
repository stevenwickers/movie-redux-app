import styled, { keyframes } from 'styled-components'
import { inverseTheme } from '../../assets/themes'

const slideInOut = keyframes`
    from {
        transform: translateX(200px);
    }
    to {
        transform: translateX(10px);
    }
`

export const UserContainerStyles = styled.div`
  position: fixed;
  right: 0;
  height: 100%;
  width: 300px;
  z-index: 100;
  transform: translateY(200px);
  transition: transform 0.3s ease-in-out;
  background-color: ${({ theme }) => inverseTheme(theme).controls.background }; 
  color: ${({ theme }) => inverseTheme(theme).controls.text };
  border: 2px solid ${({ theme }) => inverseTheme(theme).controls.borderColor };  
  &.open {
      transform: translateY(0);
      animation: ${slideInOut} 0.3s ease-in-out;
  }  
`

export const TitleSectionStyles = styled.div`
    height: 50px;
    font-size: x-large;
    padding: 5px;
    text-align: center;
    align-content: center;
    color: ${({ theme }) => inverseTheme(theme).controls.text };
    border-bottom: 1px solid ${({ theme }) => inverseTheme(theme).controls.text };
`

export const InformationAreaStyles = styled.div`
    display: flex;
    height: 60%;
    flex-direction: column;
    padding-right: 22px;
    border-bottom: 1px solid black;
`

export const SectionStyles = styled.div`
    display: flex;
    width: 100%;
    padding: 15px;
`

export const TitleStyles = styled.div`
    align-content: flex-end;
    width: 65px;
`

export const TokenAreaStyles = styled(SectionStyles)`
    padding-top: 35px;
`

export const ContentStyles = styled.div`
    width: 100%;
    text-wrap: nowrap;
    flex-wrap: nowrap;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    margin-right: 3px;
`