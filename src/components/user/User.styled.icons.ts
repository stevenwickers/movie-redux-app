import styled from 'styled-components'
import CancelIcon from '../../assets/icons/circle-solid.svg?react'
import { inverseTheme } from '../../assets/themes'

export const IconSectionStyles = styled.div`
    height: 20px;
    padding: 5px;
    text-align: right;
    color: ${({ theme }) => inverseTheme(theme).controls.text};
`

export const CancelIconStyles = styled(CancelIcon)`
    width: 28px;
    height: 28px;
`