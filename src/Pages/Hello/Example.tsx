import { Box, VStack, Text, Button, Textarea, HStack } from '@chakra-ui/react'
import { h } from 'preact'
import { hello$, info$, mutation$, query$ } from 'types/graphql/fetchers'
import { useCallback } from 'preact/hooks'

import { useMutation, useQuery } from '@client/api/graphql'
import { useGlobalState } from '@client/state'

const infoFetcher = info$.id.DEV.api.build_date.city.colo
const helloFetcher = hello$.id.data
const query = query$.info(infoFetcher).hello(helloFetcher)

const mutationHello = mutation$.helloPut(helloFetcher)

export const Example = () => {
  const [helloCount, setHelloCount] = useGlobalState('helloCount')

  const [helloPut] = useMutation(mutationHello)
  const { data, loading } = useQuery(query)

  const onCount = useCallback(() => {
    const newVal = helloCount + 1
    setHelloCount(newVal)
    helloPut({
      variables: {
        data: `${newVal}`,
      },
    }).catch(console.error)
  }, [helloCount, helloPut, setHelloCount])

  return (
    <VStack>
      <Text>Hello</Text>
      <Box>
        {loading ? (
          'Loading'
        ) : (
          <HStack>
            <Textarea fontSize={'2rem'} rows={15} value={JSON.stringify(data?.info, undefined, 2)} />
          </HStack>
        )}
      </Box>

      <Box>Local count: {helloCount}</Box>
      <Box>Durable stored data: {data?.hello?.data}</Box>
      <HStack>
        <Button variant={'solid'} onClick={onCount}>
          Count
        </Button>
        <Button
          variant={'outline'}
          onClick={() => {
            window.location.reload()
          }}
        >
          Reload
        </Button>
      </HStack>
    </VStack>
  )
}
