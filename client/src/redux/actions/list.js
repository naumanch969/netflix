import { start, error, end, getListReducer } from "../reducers/list";
import * as api from '../api/index'

export const getLists = (queries) => async (dispatch) => {
    try {
        dispatch(start())

        const { data } = await api.getLists(queries)
        dispatch(getListReducer(data.result))

        dispatch(end())
    } catch (err) {
        dispatch(error(err))
    }
}