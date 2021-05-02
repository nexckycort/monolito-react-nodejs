import os from 'os'
import colors from 'colors'

import { port } from 'config'

const getDeviceIp = (): string => {
  let deviceIp = 'not available\n'
  const networkInterfaces = os.networkInterfaces()
  for (const red in networkInterfaces) {
    const info = networkInterfaces[red]
    for (const item in info) {
      const detail = info[item as any]
      if (detail.family === 'IPv4' && !detail.internal) {
        deviceIp = `http://${detail.address}:${colors.bold.white(port)}\n`
        break
      }
    }
  }
  return deviceIp
}

export default getDeviceIp
