import styled from 'styled-components'

export const PageContainerStyles = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px;
    border-radius: 15px;
`

export const GalleryContainerStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
    list-style: none;
    padding: 10px;
    align-content: flex-start;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
`
export const WaterMarkStyles = styled.div`
    position:absolute;
    opacity: 0.2;
    color: #C7CED5;
    font-family: cursive;
    font-size: 46px;
    display:block;
    padding:15px;
    z-index:0;
`

export const GalleryItemStyles = styled.div`
    height: 105px;
    width: 205px;
    border-radius: 5px;
    padding: 3px;
    margin: 3px;
    background-color: ${({ theme }) => theme.controls.background};
    color: ${({ theme }) => theme.controls.text};
    z-index: 99;
    
    &:hover {
        box-shadow: 0 0 100px ${({ theme }) => theme.colors.text};
    }
    
`

export const DivStyles = styled.div`
    display: flex;
    flex-direction: row;
`

export const TitleStyles = styled.div`
    position: relative;
    height: 80%;
    font-size: x-large;
    align-content: center;
    justify-self: center;
    z-index: 99;

    &:hover {
        font-size: 34px;
        font-weight: bold;
    }

`

export const CountAreaStyles = styled.div`
    font-size: x-small;
    text-align: right;
    padding-right: 3px;
`

export const SpacerStyles = styled.div`
    display: flex;
    width: 10%; 
    background: transparent
`
