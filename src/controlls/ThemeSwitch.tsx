import { FC } from 'react'
import SwitchSelector from 'react-switch-selector'
import { themes } from '../assets/themes'

interface Props {
  theme: string
  onChange: () => void
}

const ThemeSwitch:FC<Props> = ({ theme, onChange }) => {
  const themeObj = themes[theme]

  const options = [
    {
      label: 'Dark',
      value: 'dark',
      selectedBackgroundColor: themeObj.commonColors.grayDark,
    },
    {
      label: 'Light',
      value: 'light',
      selectedBackgroundColor: themeObj.commonColors.grayDark,
    },
  ]

  const initialValue = options.findIndex(x => x.value === theme)
  return (
    <SwitchSelector
      onChange={onChange}
      options={options}
      initialSelectedIndex={initialValue}
      backgroundColor={themeObj.controls.background}
      fontColor={themeObj.controls.text}
    />
  )

}

export default ThemeSwitch
