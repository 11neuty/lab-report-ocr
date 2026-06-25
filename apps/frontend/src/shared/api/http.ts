import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8000',
  timeout: 30_000,
  headers: { 'Content-Type': 'application/json' },
})

http.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
)

http.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)

export default http
