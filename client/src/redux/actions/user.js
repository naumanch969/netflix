import { start, error, end, registerReducer, loginReducer } from "../reducers/user";
import * as api from '../api/index'

export const register = (userData, navigate) => async (dispatch) => {
    try {
        dispatch(start())

        await api.register(userData)
        dispatch(registerReducer())
        navigate('/auth/login')

        dispatch(end())
    } catch (err) {
        dispatch(error(err))
    }
}

export const login = (userData, navigate) => async (dispatch) => {
    try {
        dispatch(start())

        const { data } = await api.login(userData)
        dispatch(loginReducer(data.result))
        navigate('/')

        dispatch(end())
    } catch (err) {
        dispatch(error(err))
    }
}