import styled from 'styled-components'
import { ThemeNames } from '../../../assets/themes'

export const LastRowStyles = styled.div`
    display: flex;
    flex-direction: row;
`

export const LinkAreaStyles = styled.div`
    width: 90%;
`

export const ItemCardStyles = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDarkTheme',
})<{ isDarkTheme: boolean }>`
    border-radius: 15px;
    padding: 15px;
    background: ${({ theme, isDarkTheme }) => isDarkTheme ? theme.commonColors.grayDark : theme.commonColors.whiteDark};
    color: ${({ theme }) => theme.colors.text}
    font-size: smaller;
`

export const ItemUpperInfoStyles = styled.div`
    display: flex;
    flex-direction: row;
`

export const GenreCardStyles = styled.div`
    flex-direction: row;
    width: 50%;
`

export const BudgetListItemAreaStyles = styled.div`
    display: flex;
    flex-direction: row;
`

export const BudgetTitleStyles = styled.div`
    width: 15%;
`