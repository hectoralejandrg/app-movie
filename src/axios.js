import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // Reemplaza con tu URL base
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.TOKEN}`
  }
})

export default axiosInstance