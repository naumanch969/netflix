import axios from 'axios'
import { baseURL } from '../../constant.js'
import Cookie from 'js-cookie'

const API = axios.create({ baseURL })

API.interceptors.request.use((req) => {
    const profile = Cookie.get('profile')
    if (profile) {
        const user = JSON.parse(profile)
        req.headers.authtoken = user.token
    }
    return req
})


export const register = (userData) => API.post('/user/register', userData)
export const login = (userData) => API.put('/user/login', userData)


// lists
export const getLists = ({ type, genre }) => API.get(`/list/all?${type && 'type=' + type}&${genre && 'genre=' + genre}`)

export const getMovie = (movieId) => API.get(`/movie/${movieId}`)
export const getRandomMovie = ({ type, genre }) => API.get(`/movie/get/random?${type && 'type=' + type}&${genre && 'genre=' + genre}`)