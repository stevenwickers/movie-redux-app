import { css } from 'styled-components'

export const BaseStyles = css`
    body {
        font-family: Arial, Helvetica, sans-serif;
        height: 100vh;
        width: 100%;
        min-height: 1200px;
        overflow-x: hidden;
        overflow-y: hidden;
        margin: 0;
        background-color: ${({ theme }):string => theme.colors.background };
    }
`
