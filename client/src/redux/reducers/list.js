import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'list',
    initialState: {
        lists: [],
        isFetching: false,
        error: null
    },
    reducers: {
        start: (state) => { state.isFetching = true; state.error = null },
        end: (state) => { state.isFetching = false; state.error = false },
        error: (state, action) => { state.isFetching = false; state.error = action.payload },

        getListReducer: (state, action) => {
            state.lists = action.payload
        }
    }
})

export const { start, end, error, getListReducer } = listSlice.actions
export default listSlice.reducer