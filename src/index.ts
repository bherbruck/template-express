import express from 'express'
import config from './config'
import cors from 'cors'
import helmet from 'helmet'

const PORT = config.port

const app = express()

app.use(cors())
app.use(helmet())

app.get('/', async (req, res) => {
  res.send({ message: 'Hello, world!' })
})

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})
