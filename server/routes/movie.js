import express from 'express'
import { getMovies, createMovie, deleteMovie, getMovie, getRandomMovie, updateMovie } from '../controllers/movie.js'
import { verifyAdmin, verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/all', verifyToken, getMovies)
router.get('/:movieId', verifyToken, getMovie)
router.get('/get/random', verifyToken, getRandomMovie)

router.post('/create', verifyToken, verifyAdmin, createMovie)
router.put('/update/:movieId', verifyToken, verifyAdmin, updateMovie)
router.delete('/delete/:movieId', verifyToken, verifyAdmin, deleteMovie)

export default router