import { configureStore, combineReducers } from '@reduxjs/toolkit'

import userReducer from './reducers/user'
import listReducer from './reducers/list'
import movieReducer from './reducers/movie'

const rootReducer = combineReducers({
    user: userReducer,
    movie: movieReducer,
    list: listReducer
})

export const store = configureStore({
    reducer: rootReducer
})