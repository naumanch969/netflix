import { start, error, end, getMovieReducer, getRandomMovieReducer } from "../reducers/movie";
import * as api from '../api/index'

export const getMovie = (movieId) => async (dispatch) => {
    try {
        dispatch(start())

        const { data } = await api.getMovie(movieId)
        dispatch(getMovieReducer(data.result))

        dispatch(end())
    } catch (err) {
        dispatch(error(err))
    }
}

export const getRandomMovie = ({ type, genre }) => async (dispatch) => {
    try {
        dispatch(start())

        const {data} = await api.getRandomMovie({ type, genre })
        dispatch(getRandomMovieReducer(data.result))

        dispatch(end())
    } catch (err) {
        dispatch(error(err))
    }
}