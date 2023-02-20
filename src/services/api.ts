import axios from 'axios'
import env from 'react-dotenv'

const API = axios.create({
    baseURL: env.API_URL,
    headers: {

    }
})
