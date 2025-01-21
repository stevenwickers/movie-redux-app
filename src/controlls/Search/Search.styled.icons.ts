import styled from 'styled-components'
import SearchIcon from '../../assets/icons/search-solid.svg?react'
import CancelIcon from '../../assets/icons/cancel-solid.svg?react'

export const SearchIconStyles = styled(SearchIcon)`
    height: 15px;
    color: ${({ theme }) => theme.controls.iconColor};
`

export const CancelIconStyles = styled(CancelIcon)`
    height: 20px;
    color: ${({ theme }) => theme.controls.iconColor};
`