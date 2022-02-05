import axios from 'axios'

// create api with axios
export const api = axios.create({
  baseURL: '/api'
})

export const imgbbApi = axios.create({
  baseURL: 'https://api.imgbb.com/1'
})
