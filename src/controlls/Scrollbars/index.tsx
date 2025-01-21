import { FC } from 'react'
import { ScrollbarStyles } from './Scrollbars.styled'

interface Props {
  children: any
  controlHeight: number | string
  themeName: string
}

const Scrollbars:FC<Props> = ({ children, controlHeight, themeName }) => {

  return (
    <ScrollbarStyles id={'Scrollbars'} themeName={themeName} heightStyle={controlHeight}>
      {children}
    </ScrollbarStyles>
  )
}

export default Scrollbars
