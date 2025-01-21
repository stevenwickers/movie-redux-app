import styled, { css } from 'styled-components'
import UserIcon from '../../assets/icons/user-solid.svg?react'
import GalleryIcon from '../../assets/icons/table-columns-solid.svg?react'
import ListingIcon from '../../assets/icons/list-solid.svg?react'

export const UserIconStyles = styled(UserIcon)`
    border: none;
    width: 50px;
    height: 15px;
    place-content: flex-end;
    outline: none;
    color: ${({ theme }) => theme.commonColors.white };
`

export const IconStyles = (isSelected:boolean ) => css`
    width: 22px;
    padding-left: 5px;
    outline: none;
    color: ${ isSelected
    ? ({ theme }) => theme.commonColors.white
    : ({ theme }) => theme.commonColors.gray };

    &:hover {
        color: ${({ theme }) => theme.commonColors.white };
    }
`

export const GalleryIconStyles = styled(GalleryIcon).withConfig({
  shouldForwardProp: (props) => props !== 'isSelected',
})<{isSelected: boolean}>`
    ${((props:any) => IconStyles(props.isSelected))}
`

export const ListingIconStyles = styled(ListingIcon).withConfig({
  shouldForwardProp: (props) => props !== 'isSelected',
})<{isSelected: boolean}>`
    ${((props:any) => IconStyles(props.isSelected))}
`