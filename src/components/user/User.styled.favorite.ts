import styled from 'styled-components'
import { inverseTheme } from '../../assets/themes'

export const FavoriteSectionStyles = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
`

export const FavoriteTitleStyles = styled.div`
    width: 100%;
    padding-left: 15px;
`

export const FavoriteItemStyles = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
`

export const BorderContainerStyles = styled.div`
    padding-left: 15px;
`

export const BorderDivStyles = styled.div`
    width: 95%;
    border: 1px solid ${({ theme }) => inverseTheme(theme).controls.text};
`

export const NoResultsStyles = styled.div`
    height:150px;
    padding-left: 25px;
    padding-top:5px
`