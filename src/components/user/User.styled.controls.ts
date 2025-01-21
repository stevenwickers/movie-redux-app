import styled from 'styled-components'

export const SwitchAreaStyles = styled.div`
    width: 125px;
    height: 35px;
`

export const ButtonAreaStyles = styled.div`
    padding: 15px;
    text-align: center;
    align-content: center;
`

export const ButtonStyles = styled.button`
    height: 45px;
    width: 125px;
    border-radius: 5px;
    background:  ${({ theme }) => theme.controls.background };
    color: ${({ theme }) => theme.controls.text};
    &:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`