import { ADD_TODO, CEK_TODO, GET_TODO, SET_TODO } from './constants';

export const getToDO = (datas) => {
    return { type: GET_TODO, payload: datas }
}

export const cekToDO = () => {
    return { type: CEK_TODO }
}

export const addToDO = (newData) => {
    return { type: ADD_TODO, payload: newData }
}

export const setToDO = (newData) => {
    return { type: SET_TODO, payload: newData }
}