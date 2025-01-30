import styled from 'styled-components'
import FoldingIcon from '../../../assets/icons/open-close-solid.svg?react'

export const FoldingIconAreaStyles = styled.div`
    vertical-align: text-top;
`

export const FoldingIconStyles = styled(FoldingIcon).withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
    width: 12px;
    color: ${({ theme }) => theme.commonColors.blue };
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : '')};
`