import styled from 'styled-components'

export const ContainerStyles = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 5px;
    height: 24px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.controls.borderColor};
    background: ${({ theme }) => theme.controls.background};
    align-items: center;
`

export const SearchInputStyles = styled.input`
    padding-left: 5px;
    padding-right: 5px;
    height: 22px;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.controls.background};
    color: ${({ theme }) => theme.colors.text};
`