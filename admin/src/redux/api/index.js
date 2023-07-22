import axios from 'axios'
import Cookie from 'js-cookie'

const API = axios.create({ baseURL: 'http://localhost:5500' })

API.interceptors.request.use((req) => {
    if (Cookie.get('profile')) {
      const TOKEN = JSON.parse(Cookie.get('profile')).token; // Fix the token retrieval here
      console.log('token', TOKEN);
      req.headers.authtoken = TOKEN;
    }
    return req;
  });
  

// users
export const register = (userData) => API.post(`/user/register`, userData)
export const login = (userData) => API.put(`/user/login`, userData)

export const getUser = (userId) => API.get(`/user/${userId}`)
export const getUsers = () => API.get(`/user/all`)
export const getUserStats = () => API.get(`/user/stats`)
export const getNewUsers = () => API.get(`/user/all?new=true`)
export const updateUser = (userId, user) => API.get(`/user/update/${userId}`, user)
export const deleteUser = (userId) => API.get(`/user/delete/${userId}`)

// users
export const getLists = () => API.get(`/list/all`)
export const getRandomList = () => API.get(`/list/random`)
export const getList = (listId) => API.get(`/list/${listId}`)
export const createList = (listData) => API.get(`/list/create`, listData)
export const updateList = (listId, listData) => API.get(`/list/udpate/${listId}`, listData)
export const deleteList = (listId) => API.get(`/list/delete/${listId}`)

//  movies
export const getMovies = () => API.get(`/movie/all`)
export const getRandomMovie = () => API.get(`/movie/random`)
export const getMovie = (movieId) => API.get(`/movie/${movieId}`)
export const createMovie = (movieData) => API.post('/movie/create', movieData)
export const updateMovie = (movieId, movieData) => API.put(`/movie/update/${movieId}`, movieData)
export const deleteMovie = (movieId) => API.delete(`/movie/delete/${movieId}`)