import * as dotenv from 'dotenv'

dotenv.config()

interface ConfigType {
  port: number,
  socketIoPort: number,
  gameStateToken: string,
  gameStateTimeout: number,
  steamApiKey: string,
  dbConnection: string | null,
  useStaticData: boolean
}

const config: ConfigType = {
  'port': Number(process.env.SERVER_PORT) || 8080,
  'socketIoPort': Number(process.env.SOCKET_PORT) || 8081,
  'gameStateToken': process.env.TOKEN_SECRET || 'SecretKEY',
  'gameStateTimeout': Number(process.env.TIMEOUT_TIME) || 5,
  'steamApiKey': process.env.STEAM_API_KEY || '',
  'dbConnection': process.env.DB_CONNECTION || null,
  'useStaticData': process.env.USE_STATIC_DATA === 'TRUE'
}

export default config
