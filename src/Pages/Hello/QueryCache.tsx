import { Box, VStack, Text } from '@chakra-ui/react'
import { h } from 'preact'
import { hello$, query$ } from 'types/graphql/fetchers'

import { useQuery } from '@client/api/graphql'
import { useGlobalState } from '@client/state'

const helloFetcher = hello$.id.data.updatedAt
const query = query$.hello(helloFetcher)

export const QueryCache = () => {
  const [helloCount] = useGlobalState('helloCount')
  const { data } = useQuery(query)

  return (
    <VStack borderWidth={'2px'} borderColor={'red'}>
      <Text>State update and query cache update</Text>

      <Box>Local count: {helloCount}</Box>
      <Box>Query hello data(cache): {data?.hello?.data}</Box>
    </VStack>
  )
}
