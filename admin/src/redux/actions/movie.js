import { start, end, error, getMoviesReducer, getMovieReducer, createMovieReducer, updateMovieReducer, deleteMovieReducer } from "../reducers/movie"
import * as api from '../api'


export const getMovies = () => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.getMovies()
        dispatch(getMoviesReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const getMovie = (id) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.getMovie(id)
        dispatch(getMovieReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const createMovie = (movie) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.createMovie(movie)
        console.log('data', data)
        dispatch(createMovieReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const updateMovie = (id, movie) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.updateMovie(id, movie)
        dispatch(updateMovieReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const deleteMovie = (id) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.deleteMovie(id)
        dispatch(deleteMovieReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};