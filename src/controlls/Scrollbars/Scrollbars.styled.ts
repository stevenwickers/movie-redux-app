import styled from 'styled-components'
import { ThemeNames } from '../../assets/themes'

export const ScrollbarStyles = styled.div<{themeName: string, heightStyle: number | string}>`
    height: ${props => typeof props.heightStyle === 'string' ? props.heightStyle : `${props.heightStyle}px`};
    margin: 20px;
    overflow-y: auto;

    &::-webkit-scrollbar-track {
        border: 1px solid ${({ theme }) => theme.commonColors.white }
        padding: 2px 0;
        background-color: ${({ theme, themeName }) => themeName === ThemeNames.DARK
    ? theme.commonColors.blueCadet
    : theme.commonColors.whiteDark
}
    }

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: ${({ theme }) => theme.commonColors.black };
        border: 1px solid ${({ theme }) => theme.commonColors.grayDark };
    }
`