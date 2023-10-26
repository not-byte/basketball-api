import * as dotenv from 'dotenv'
import * as express from 'express'
import {type Express} from 'express'
import * as cors from 'cors'
import {type CorsOptions} from 'cors'
import helmet, {type HelmetOptions} from 'helmet'
import router from 'routes/router'
import initializeSqlite from 'services/storage/sqlite/initialize.sqlite'
import initializeSocket from 'services/socket.service'
import {createServer, type Server} from 'http'

dotenv.config()

const server: Express = express()
const http: Server = createServer(server)
const port: number = parseInt(process.env.PORT as string)
const options: CorsOptions = {
  origin: JSON.parse(process.env.ADDRESSES as string),
}
const helmetOptions: HelmetOptions = {
  contentSecurityPolicy: false,
}

global.__basedir = __dirname

server.disable('x-powered-by')
server.set('trust proxy', 1)
server.options('*', cors())
server.use(cors(options))
server.use(helmet(helmetOptions))
server.use(helmet.hidePoweredBy())
server.use(helmet.noSniff())
server.use(express.json({ limit: '100kb', type: [ 'application/json', 'text/plain' ] }))
server.use(express.urlencoded({ limit: '100kb', parameterLimit: 100, extended: false }))
server.use(router)

http.listen(port, (): void => {
  console.log(`${new Date().toLocaleTimeString('pl-PL')} [server] listening on http://localhost:${port}`)
  initializeSqlite().then(() => initializeSocket(http))
  // setupStorage().then(() => setupMail())
})
