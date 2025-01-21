
export enum ThemeNames {
    DARK = 'dark',
    LIGHT = 'light',
}

export type ThemeType = {
    ThemeNames: ThemeNames;
}
export interface ITheme {
    [key: string]: ThemeType;
}

export const inverseTheme = (theme:any) => {
  return theme === themes[ThemeNames.DARK] ? themes[ThemeNames.LIGHT] : themes[ThemeNames.DARK]
}

export const common = {
  commonColors: {
    black: '#000000',
    blue: '#00ABC9',
    blueCadet: '#5F9EA0',
    gray: '#C7CED5',
    grayDark: '#8594A8',
    white: '#FFFFFF',
    whiteDark: '#F1F5F9',
    yellow: '#D7AC11'
  }
}

export const themes: any = {
  dark: {
    colors: {
      background: '#040607',
      text: '#FFFFFF'
    },
    panel: {
      background: '#131F24'
    },
    controls: {
      background: '#273E49',
      text: '#FFFFFF', // '#AFBECD',
      borderColor: '#8594A8',
      iconColor: '#8594A8'
    },
    ...common,
  },
  light: {
    colors: {
      background: '#F1F5F9',
      text: '#000000'
    },
    panel: {
      background: '#FFFFFF'
    },
    controls: {
      background: '#FFFFFF',
      text: '#8594A8', // '#AEBECD',
      borderColor: '#8594A8',
      iconColor: '#AEBECD'
    },
    ...common,
  }
}
