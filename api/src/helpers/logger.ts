import { debug } from 'config'

const Logger = {
  info: (...args: unknown[]): void => {
    args.forEach((arg) => {
      console.log(arg)
    })
  },
  debug: (...args: unknown[]): void => {
    if (debug) {
      args.forEach((arg) => {
        console.log(arg)
      })
    }
  },
  error: (msg: string, e: Error | string = ''): void => {
    console.log(`⚠️  ${msg} ⚠️ `, e)
  }
}

export default Logger
