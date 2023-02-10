import dotenv from 'dotenv'

dotenv.config()

const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || ''
const MONGODB_URL = `mongodb+srv://lordlonso:${MONGODB_PASSWORD}@nodeexpressproject.purussx.mongodb.net/?retryWrites=true&w=majority`

const port = process.env.PORT || 5001

export const config = {
    mongo: {
        url: MONGODB_URL
    },
    server: {
        port: port
    }
}