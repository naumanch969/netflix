import { createSlice } from '@reduxjs/toolkit'


const listSlice = createSlice({
    name: 'list',
    initialState: {
        isFetching: false,
        error: false,
        currentList: null,
        lists: [],
    },
    reducers: {
        start: (state) => { state.isFetching = true; state.error = false },
        end: (state) => { state.isFetching = false; state.error = false },
        error: (state) => { state.isFetching = false; state.error = true },
        getListsReducer: (state, action) => { state.lists = action.payload },
        getListReducer: (state, action) => { state.currentList = action.payload },
        createListReducer: (state, action) => { state.lists = state.lists.concat(action.payload) },
        updateListReducer: (state, action) => { state.lists = state.lists.map(list => list = list._id == action.payload._id ? action.payload : list) },
        deleteListReducer: (state, action) => { state.lists = state.lists.filter(list => list._id !== action.payload._id) },

    }
})

export const { start, end, error, getListsReducer, getListReducer, createListReducer, updateListReducer, deleteListReducer } = listSlice.actions;
export default listSlice.reducer;