import { ApolloClient, ApolloError, HttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { ObjectFetcher } from 'graphql-ts-client-api'
import { useTypedMutation, useTypedQuery } from 'types/graphql'
import { onError } from '@apollo/client/link/error'
import { BaseMutationOptions } from '@apollo/client'

import { locationToString } from '@client/helpers/location'
import { getGlobalState } from '@client/state'

const httpLink = new HttpLink({
  uri: `${locationToString()}/graphql`,
})

const authLink = setContext((request, previousContext) => {
  // get the authentication token from local storage if it exists
  const token = getGlobalState('authToken')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...previousContext.headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    for (const error of graphQLErrors) {
      const { message, path, extensions } = error
      const code = extensions?.code || 'error_server'

      console.error(`[GraphQL Error]: ${code || ''} ${message}\n Path: ${(path || '').toString()}`)

      // Process Errors
    }
  if (networkError) console.error(`[Network error]: ${networkError}`)
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: {
      errorPolicy: 'none',
      fetchPolicy: 'network-only',
    },
    query: {
      errorPolicy: 'all',
    },
    watchQuery: {
      errorPolicy: 'all',
    },
  },
  link: authLink.concat(httpLink).concat(errorLink),
})

export const useQuery = <T extends object, TVariables extends object>(
  fetcher: ObjectFetcher<'Query', T, TVariables>,
  variables?: TVariables & { __overrideToken?: string },
) => {
  const qry = useTypedQuery(fetcher, {
    variables,
  })

  return qry
}

export const useMutation = <T extends object, TVariables extends object>(
  fetcher: ObjectFetcher<'Mutation', T, TVariables>,
  options?: {
    readonly variables?: TVariables
    readonly onError?: (error: ApolloError) => void
    readonly onCompleted?: (data: T | undefined, error?: BaseMutationOptions) => void
  },
) => {
  const mutation = useTypedMutation(fetcher, {
    onCompleted(data, error) {
      options?.onCompleted?.(data, error)
    },
    onError(error) {
      options?.onError?.(error)
    },
    variables: options?.variables,
  })
  return mutation
}
