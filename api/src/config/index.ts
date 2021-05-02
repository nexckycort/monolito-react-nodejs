import path from 'path'

import { ENVIRONMENT } from 'interfaces/server.interfaces'

// Mapper for environment variables
export const environment = process.env.NODE_ENV ?? ''
export const port = process.env.PORT ?? ''
export const name = process.env.NAME_API ?? ''

export const corsUrl = process.env.CORS_URL ?? ''

export let pathPublic!: string
if (environment === ENVIRONMENT.PRODUCTION || environment === undefined) pathPublic = __dirname
else pathPublic = path.join(__dirname, '..')

export const api = {
  prefix: process.env.PREFIX_API ?? ''
}
