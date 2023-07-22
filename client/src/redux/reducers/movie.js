import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
        currentMovie: null,
        featuredMovie: null,
        isFetching: false,
        error: null
    },
    reducers: {
        start: (state) => { state.isFetching = true; state.error = null },
        end: (state) => { state.isFetching = false; state.error = false },
        error: (state, action) => { state.isFetching = false; state.error = action.payload },

        getMovieReducer: (state, action) => {
            state.currentMovie = action.payload
        },
        getRandomMovieReducer: (state, action) => {
            console.log('action', action.payload)
            state.featuredMovie = action.payload
        },

    }
})
export const { start, end, error, getMovieReducer, getRandomMovieReducer } = movieSlice.actions
export default movieSlice.reducer