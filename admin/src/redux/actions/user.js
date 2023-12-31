import { error, end, start,  loginReducer, getUserReducer, getUsersReducer, getUserStatsReducer, registerReducer, updateUserReducer, deleteUserReducer } from "../reducers/user"
import * as api from '../api'
import Cookie from 'js-cookie'

export const getUsers = ({ new: new_query } = {}) => async (dispatch) => {
    dispatch(start());
    try {
        const data = await (new_query ? api.getNewUsers() : api.getUsers())
        dispatch(getUsersReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const getUser = (id) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.getUser(id);
        dispatch(getUserReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const getUserStats = () => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.getUserStats();
        dispatch(getUserStatsReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const register = (user, navigate) => async (dispatch) => {
    dispatch(start())
    try {
        const data = await api.register(user)
        dispatch(registerReducer())
        navigate('/login')
    } catch (err) {
        dispatch(error())
    }
    dispatch(end());
}

export const login = (user, navigate) => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.login(user)
        dispatch(loginReducer(data.result))
        navigate('/')
        Cookie.set('profile', JSON.stringify(data.result))
    } catch (err) {
        dispatch(error())
    }
    dispatch(end());
}

export const updateUser = (id, user) => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.updateUser(id, user)
        dispatch(updateUserReducer(data.result))
    } catch (err) {
        dispatch(error())
    }
    dispatch(end());
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.deleteUser(id)
        dispatch(deleteUserReducer(data.result))
    } catch (err) {
        dispatch(error())
    }
    dispatch(end());
}