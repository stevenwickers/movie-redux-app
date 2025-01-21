import styled from 'styled-components'

export const AccordionItemStyles = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 10px;
    background: ${({ theme }) => theme.controls.background };
    color: ${({ theme }) => theme.colors.text };
`

export const AccordionItemTitleAreaStyles = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    cursor: pointer;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.background };
    }
`

export const AccordionTitleStyles = styled.div`
    width: 100%;
`

export const AccordingItemContentStyles = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
    overflow: hidden;
    transition: opacity 2s ease-out;
    max-height: ${({ isActive }) => (isActive ? '250rem' : '0')};;
    font-size: smaller;
    padding: ${({ isActive }) => (isActive ? '15px' : '0')};
`