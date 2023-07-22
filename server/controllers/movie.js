import Movie from '../models/movie.js'
import { error } from '../utils/error.js'


export const getMovies = async (req, res, next) => {
    try {

        const result = await Movie.find()
        res.status(200).json({ result: result.reverse(), success: true, message: 'Movie deleted successfully' })

    }
    catch (err) {
        next(error(500, `${err.message} - getMovies`))
    }
}

export const getMovie = async (req, res, next) => {
    try {
        const { movieId } = req.params

        const result = await Movie.findById(movieId)
        res.status(200).json({ result, success: true, message: 'Movie deleted successfully' })

    }
    catch (err) {
        next(error(500, `${err.message} - getMovie`))
    }
}


export const getRandomMovie = async (req, res, next) => {
    try {
        const { type } = req.query  // movie | series

        let result
        type == 'series'
            ?
            result = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }
            ])
            :
            result = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } }
            ])

        return res.status(200).json({ result: result[0], success: true, message: 'Random movie fetched successfully' })

    }
    catch (err) {
        next(error(500, `${err.message} - getRandomMovie`))
    }
}


export const createMovie = async (req, res, next) => {
    try {

        const result = await Movie.create(req.body)
        res.status(200).json({ result, success: true, message: 'Movie created successfully' })

    }
    catch (err) {
        next(error(500, `${err.message} - createMovie`))
    }
}


export const updateMovie = async (req, res, next) => {
    try {

        const { movieId } = req.params

        const result = await Movie.findByIdAndUpdate(movieId, { $set: req.body }, { new: true })
        res.status(200).json({ result, success: true, message: 'Movie updated successfully' })

    }
    catch (err) {
        next(error(500, `${err.message} - updateMovie`))
    }
}


export const deleteMovie = async (req, res, next) => {
    try {

        const { movieId } = req.params

        await Movie.findByIdAndDelete(movieId)
        res.status(200).json({ success: true, message: 'Movie deleted successfully' })

    }
    catch (err) {
        next(error(500, `${err.message} - deleteMovie`))
    }
}
