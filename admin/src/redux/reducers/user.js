import { createSlice } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        currentUser: null,
        loggedUser: Cookie.get('profile') ? JSON.parse(Cookie.get('profile')) : null,
        userStats: [],
        error: false,
        isFetching: false,
    },
    reducers: {
        start: (state) => { state.isFetching = true; state.error = false },
        end: (state) => { state.isFetching = false; state.error = false },
        error: (state) => { state.isFetching = false; state.error = true },
        getUsersReducer: (state, action) => { state.users = action.payload },
        getUserReducer: (state, action) => { state.currentUser = action.payload },
        getUserStatsReducer: (state, action) => {
            const MONTHS = ['Mon', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            const stats = action.payload
            state.userStats = stats.map(stat => ({ name: MONTHS[stat._id - 1], "Active User": stat.total }))
        },
        registerReducer: (state) => { return state },
        loginReducer: (state, action) => { state.loggedUser = action.payload },
        updateUserReducer: (state, action) => { state.users = state.users.map(user => user = user._id == action.payload._id ? action.payload : user) },
        deleteUserReducer: (state, action) => { state.users = state.users.filter(user => user._id !== action.payload._id) },
    }
})

export const { start, end, error, getUsersReducer, getUserReducer, getUserStatsReducer, registerReducer, loginReducer, updateUserReducer, deleteUserReducer } = userSlice.actions;
export default userSlice.reducer;

