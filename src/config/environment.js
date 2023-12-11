import 'dotenv/config'

export const env = {
  BUILD_MODE: process.env.BUILD_MODE,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT
}
