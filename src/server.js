/* eslint-disable no-console */
import express from 'express'
import { env } from './config/environment'

const START_SERVER = () => {
  const app = express()

  const hostname = env.APP_HOST
  const port = env.APP_PORT

  app.use(express.json())

  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Server Ok!'
    })
  })

  app.listen(port, hostname, () => {
    console.log(`Hello Minh Oanh, I am running at http://${hostname}:${port}/`)
  })
}

(async () => {
  try {
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()
