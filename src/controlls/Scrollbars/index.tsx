import { FC } from 'react'
import { ScrollbarStyles } from './Scrollbars.styled'
import { ThemeNames } from '../../assets/themes'

interface Props {
  children: any
  controlHeight: number | string
  themeName: string
}

const Scrollbars:FC<Props> = ({ children, controlHeight, themeName }) => {

  return (
    <ScrollbarStyles id={'Scrollbars'} isDarkTheme={themeName === ThemeNames.DARK} heightStyle={controlHeight}>
      {children}
    </ScrollbarStyles>
  )
}

export default Scrollbars
