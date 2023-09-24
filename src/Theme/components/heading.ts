import { type ComponentStyleConfig } from '@chakra-ui/react'
import { defineStyle } from '@chakra-ui/styled-system'

export const Heading: ComponentStyleConfig = {
  baseStyle: defineStyle({
    fontFamily: 'default',
    fontWeight: 'regular',
    py: '0.2rem',
  }),
  defaultProps: {
    size: 'body',
  },
  sizes: {
    body: defineStyle({
      fontSize: 'body.sm',
    }),
    body2xs: defineStyle({
      fontSize: 'body.2xs',
    }),
    bodyxs: defineStyle({
      fontSize: 'body.xs',
    }),
    h1: defineStyle({
      fontSize: 'h1',
      fontWeight: 'bold',
    }),
    h2: defineStyle({
      fontSize: 'h2',
      fontWeight: 'bold',
    }),
    h3: defineStyle({
      fontSize: 'h3',
      fontWeight: 'bold',
    }),
    h4: defineStyle({
      fontSize: 'h4',
    }),
    h5: defineStyle({
      fontSize: 'h5',
    }),
    h6: defineStyle({
      fontSize: 'h6',
    }),
    subtitle: defineStyle({
      fontSize: 'body.sm',
      fontWeight: 'semibold',
    }),
  },
}
