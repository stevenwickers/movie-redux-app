import styled from 'styled-components'

export const PageContainerStyles = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
`

export const ListingsContainerStyles = styled.div`
    flex-direction: column;
    width: 100%;
    border-radius: 3px;
    height: calc(100vh - 105px);
    background-color: ${({ theme }) => theme.panel.background};
    color: ${({ theme }) => theme.colors.text}; 
`

export const NoResultsStyles = styled.div`
    padding: 10px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
`