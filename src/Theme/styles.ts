import { mode } from '@chakra-ui/theme-tools'

import type { Theme } from '@chakra-ui/react'

export const styles: Theme['styles'] = {
  global: props => ({
    '*, *::before, &::after': {
      '-webkit-font-smoothing': 'antialiased',
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      userScalable: 'no',
      wordWrap: 'break-word',
    },
    '*::placeholder': {
      color: mode('gray.dark', 'gray.dark')(props),
    },

    '.disable-select': {
      /* Safari */
      '-khtml-user-select': 'none',

      /* Konqueror HTML */
      '-moz-user-select': 'none',

      '-ms-user-select': 'none',

      /* supported by Chrome and Opera */
      '-webkit-user-select': 'none' /* Firefox */,

      userSelect: 'none' /* Internet Explorer/Edge */,
    },
    /* width */
    '::-webkit-scrollbar': {
      borderRadius: '10px',
      height: '0.7rem',
      visibility: 'hidden',
      width: { base: 0, laptop: '0.7rem' },
    },

    /* Handle */
    '::-webkit-scrollbar-thumb': {
      background: '#B2B2B2',
      borderRadius: '10px',
    },

    /* Handle on hover */
    '::-webkit-scrollbar-thumb:hover': {
      background: '#6E6E6E',
      borderRadius: '10px',
    },

    /* Track */
    '::-webkit-scrollbar-track': {
      visibility: 'hidden',
    },

    a: {
      _hover: {
        color: 'primary.default',
      },
      color: mode('primary.dark', 'primary.default')(props),
      fontWeight: 'semibold',
      transition: 'color 0.15s',
      transitionTimingFunction: 'ease-out',
    },

    'a,button': {
      cursor: 'pointer',
    },

    'blockquote:before, blockquote:after, q:before, q:after': {
      boxSizing: 'inherit',
      content: 'none',
    },

    body: {
      backgroundColor: mode('gray.ultraLight', 'gray.dark')(props),
      color: mode('gray.dark', 'gray.ultraLight')(props),
      fontFamily: 'default',
      fontSize: '1.6rem',
      fontStyle: 'normal',
      height: '100%',
      lineHeight: 'base',
      overflow: 'hidden',
      width: '100%',
    },

    html: {
      fontSize: '62.5%' /* Font-size = 10px default */,
      height: '100%',
      overflow: 'hidden',
      width: '100%',
    },

    'ol, ul': {
      listStyle: 'none',
    },
  }),
}
