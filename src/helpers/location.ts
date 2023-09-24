export const locationToURL = () => new URL(location.origin)

export const locationToString = (protocol: 'http' | 'ws' = 'http') => {
  const url = locationToURL()
  let _protocol = url.protocol
  if (protocol === 'ws') {
    _protocol = url.protocol === 'https:' ? 'wss:' : 'ws:'
  }
  return `${_protocol}//${url.hostname}${url.port ? `:${url.port}` : ''}`
}
