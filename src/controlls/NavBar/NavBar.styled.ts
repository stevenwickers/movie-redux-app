import styled from 'styled-components'
import { Tooltip } from 'react-tooltip'

export const TooltipStyles = styled(Tooltip)`
    background-color: ${({ theme }) => theme.commonColors.white }
    color: ${({ theme }) => theme.commonColors.black }
    z-index: 100 !important;
    font-size: 12px !important;
`

export const NavComponentStyles = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.commonColors.grayDark };
    height: 35px;
    width: 100%;
`

export const NavLeftStyles = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;
`

export const NavRightStyles = styled.div`
    display: flex;
    list-style-type: none;
    align-items: center;
    width:100%;
    justify-content: flex-end;
    margin-right: 15px;
`
