import colors from 'colors'

import { ENVIRONMENT, Loaders, PreLoaders } from 'interfaces/server.interfaces'
import serverLoader from 'loaders/server'
import { environment, port } from 'config'
import Logger from 'helpers/logger'
import getDeviceIp from 'helpers/getDeviceIp'

const loaders = (): Loaders => {
  Logger.info(colors.bold.italic.blue('Loading configuration... 💻'))
  const environmentMsg = `${colors.bold.magenta('Environment:')} ${colors.italic.bold.yellow(environment)}`
  Logger.info(environmentMsg)

  const loaders: PreLoaders = {
    server: undefined
  }

  try {
    loaders.server = serverLoader()
    Logger.info(colors.bold.green('Server loaded ✌️'))
    if (environment === ENVIRONMENT.DEVELOPMENT) {
      const deviceIp = getDeviceIp()
      Logger.info(`You can now consume the ${colors.bold.white('api.')}\n\n   ${colors.bold.white('Local:')}           http://localhost:${colors.bold.white(port)}\n   ${colors.bold.white('On Your Network:')} ${deviceIp}`)
    }
  } catch (error) {
    Logger.error(colors.red('error loading Server'), error)
    throw error
  }

  return loaders as Loaders
}

export default loaders
