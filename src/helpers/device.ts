import { detect } from 'detect-browser'
import { version } from 'package.json'

export const getDeviceInfo = () => {
  const browser = detect()

  return {
    appVersion: `v${version}`,
    client: browser?.name,
    os: browser?.os,
    platform: 'web',
  }
}
