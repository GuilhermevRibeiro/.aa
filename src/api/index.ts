import { getDeviceInfo } from '@client/helpers/device'
import { locationToString } from '@client/helpers/location'
import { getGlobalState } from '@client/state'

type FetchParams = {
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT'
  path: string
  headers?: Record<string, string>
  query?: Record<string, any>
  data?: Record<string, any>
  buffer?: ArrayBuffer
}

const ApiFetch = async (params: FetchParams): Promise<Response | undefined> => {
  const { path, method = 'GET', data, query, buffer } = params || {}
  let _path = `${locationToString()}/api${path.startsWith('/') ? path : `/${path}`}`

  if (query) _path = `${_path}?${new URLSearchParams(query).toString()}`

  let body: string | ArrayBuffer | undefined
  if (buffer) {
    body = buffer
  } else if (data) {
    body = JSON.stringify(data)
  }
  const authToken = getGlobalState('authToken')

  const devInfo = getDeviceInfo()
  const resp = await fetch(_path, {
    body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...params?.headers,
      api: '1',
      app_version: devInfo.appVersion || '',
      authorization: `Bearer ${authToken}`,
      client: devInfo.client || '',
      os: devInfo.os || '',
      platform: devInfo.platform || '',
    },
    method,
  })

  if (resp.status < 200 || resp.status > 299) {
    const msg = `${resp.status} ${resp.statusText}`
    console.error(msg)
    throw new Error(msg)
  } else return resp
}

export const ApiFetchJson = async <T extends Record<string, any>>(params: FetchParams): Promise<T | undefined> => {
  const resp = await ApiFetch(params)
  if (resp?.status === 204) return
  return resp?.json()
}

export const ApiFetchBlob = async (params: FetchParams): Promise<Blob | undefined> => {
  const resp = await ApiFetch(params)
  if (resp?.status === 204) return
  return resp?.blob()
}
