import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducers from './reducers/user';
import listReducers from './reducers/list';
import movieReducers from './reducers/movie';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const persistConfig = { key: 'admin', version: 1, storage };
const rootReducer = combineReducers({ user: userReducers, list: listReducers, movie: movieReducers });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    //         }
    //     })
});

// export const persistor = persistStore(store);