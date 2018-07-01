import axios from 'axios'
// import api from './api'
let options = axios.create({
  baseURL: 'http://localhost',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default options
