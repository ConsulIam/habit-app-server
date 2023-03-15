import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
  host: "0.0.0.0",
  port: 11337,
}).then((url) => {
  console.log(`Consul HTTP Server running on ${url}!`)
})