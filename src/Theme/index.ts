import { extendTheme, type Theme, useTheme as _useTheme } from '@chakra-ui/react'

// Component style overrides
import { Heading } from './components/heading'
import { styles } from './styles'
import colors from './colors'
import borders from './borders'

export { default as colors } from './colors'
export { default as borders } from './borders'

const config: Theme['config'] = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const breakpoints = <const>{
  base: '0em',
  desktop: '96em',
  laptop: '62em',
  mobile: '30em',
  tablet: '48em',
}

const CustomTheme = {
  blur: {
    //
  },
  borders,
  breakpoints,
  colors,

  components: <Theme['components']>{
    Heading,
  },
  config,
  direction: 'ltr',
  // Typography
  fontSizes: {
    body: {
      '2xs': '1.2rem',
      '3xs': '1rem',
      sm: '1.6rem',
      xs: '1.4rem',
    },

    h1: '5rem',
    h2: '4.6rem',
    h3: '4rem',
    h4: '3.2rem',
    h5: '2.4rem',
    h6: '2rem',
  },

  fontWeights: {
    black: 900,
    bold: 700,
    extraLight: 200,
    light: 300,
    regular: 400,
    semiBold: 600,
    semibold: 600,
  },

  fonts: {
    // global
    default: 'Roboto, sans-serif',
  },
  ineHeights: {
    //
  },

  letterSpacings: {
    //
  },

  radii: {
    //
  },

  shadows: {
    boxShadowDefault: 'rgba(0,0, 2, 0.35) 0px 5px 15px',
  },

  sizes: {
    //
  },
  space: {
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    2: '0.5rem',
    2.5: '0.625rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    3: '0.75rem',
    3.5: '0.875rem',
    32: '8rem',
    36: '9rem',
    4: '1rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    5: '1.25rem',
    52: '13rem',
    56: '14rem',
    6: '1.5rem',
    60: '15rem',
    64: '16rem',
    7: '1.75rem',
    72: '18rem',
    8: '2rem',
    80: '20rem',
    9: '2.25rem',
    96: '24rem',
  },

  styles,
  transition: {
    //
  },

  // values References
  zIndices: {
    auto: 'auto',
    banner: 1200,
    base: 0,
    docked: 10,
    dropdown: 1000,
    hide: -1,
    modal: 1400,
    overlay: 1300,
    popover: 1500,
    skipLink: 1600,
    sticky: 1100,
    toast: 1700,
    tooltip: 1800,
  },
}

// Used for custom types generation
const _theme = extendTheme(CustomTheme) as typeof CustomTheme & Theme
;(_theme as typeof CustomTheme).breakpoints = breakpoints
export const theme = _theme
//

export const SouvThemeChakra = theme
export const useTheme = _useTheme<typeof theme>

export const SouvJobsTheme = extendTheme({
  borders: SouvThemeChakra.borders,
  colors: SouvThemeChakra.colors,
  fonts: SouvThemeChakra.fonts,
  styles: {
    global: {
      ...SouvThemeChakra.styles.global,
      html: {},
    },
  },
})
