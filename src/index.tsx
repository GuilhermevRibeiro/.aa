import { Center, ChakraProvider, Spinner } from '@chakra-ui/react'
import { h } from 'preact'
import { lazy, Suspense } from 'preact/compat'

import Sidebar from './components/Header/sidebar'

const Router = lazy(() => import('./Routes'))

const App = () => (
  <ChakraProvider>
    <Suspense
      fallback={
        <Center>
          <Spinner size={'lg'} />
        </Center>
      }
    >
      <Sidebar>
        <Router />
      </Sidebar>
    </Suspense>
  </ChakraProvider>
)

export default App
