import express from 'express'
import config from './config'

const PORT = config.port

const app = express()

app.get('/', async (req, res) => {
  res.send({ message: 'Hello, world!' })
})

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})
