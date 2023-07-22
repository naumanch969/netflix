import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        isFetching: false,
        error: false,
        currentMovie: null,
        movies: []
    },
    reducers: {
        start: (state) => { state.isFetching = true; state.error = false },
        end: (state) => { state.isFetching = false; state.error = false },
        error: (state) => { state.isFetching = false; state.error = true },
        getMoviesReducer: (state, action) => { state.movies = action.payload },
        getMovieReducer: (state, action) => { state.currentMovie = action.payload },
        createMovieReducer: (state, action) => { state.movies = state.movies.concat(action.payload) },
        updateMovieReducer: (state, action) => { state.movies = state.movies.map(movie => movie = movie._id == action.payload._id ? action.payload : movie) },
        deleteMovieReducer: (state, action) => { state.movies = state.movies.filter(movie => movie._id !== action.payload._id) },
    }
})

export const { start, end, error, getMoviesReducer, getMovieReducer, createMovieReducer, updateMovieReducer, deleteMovieReducer } = movieSlice.actions;
export default movieSlice.reducer;