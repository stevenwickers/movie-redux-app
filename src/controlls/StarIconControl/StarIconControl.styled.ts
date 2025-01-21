import styled from 'styled-components'
import StarIcon from '../../assets/icons/star-solid.svg?react'
import StarIconHollow from '../../assets/icons/star-regular.svg?react'

export const StarIconStyles = styled(StarIcon)<{width: number}>`
    width: ${(props) => props.width}px;
    color: ${({ theme }) => theme.commonColors.yellow }
`

export const StarIconHollowStyles = styled(StarIconHollow)<{width: number}>`
    width: ${(props) => props.width}px;
`