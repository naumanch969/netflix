import { start, end, error, getListsReducer, getListReducer, createListReducer, updateListReducer, deleteListReducer } from "../reducers/list"
import * as api from '../api'


export const getLists = () => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.getLists()
        dispatch(getListsReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const getList = (id) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.getList(id)
        dispatch(getListReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const createList = (list) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.createList(list)
        dispatch(createListReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const updateList = (id, list) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.updateList(id, list)
        dispatch(updateListReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};

export const deleteList = (id) => async (dispatch) => {
    dispatch(start());
    try {
        const { data } = await api.deleteList(id)
        dispatch(deleteListReducer(data.result));
    } catch (err) {
        dispatch(error());
    }
    dispatch(end());
};