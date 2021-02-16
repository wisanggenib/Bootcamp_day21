import { LOG_OUT, SET_LOGIN, LOGIN, CEK_STATUS, CEK_LOGOUT } from './constants';

export const setLogin = (data) => {
    return { type: SET_LOGIN, payload: data }
}

export const logOut = (id) => {
    return { type: LOG_OUT, payload: id };
};

export const login = (data) => {
    return { type: LOGIN, payload: data }
};

export const cekStatus = () => {
    return { type: CEK_STATUS }
}

export const cekLogout = () => {
    return { type: CEK_LOGOUT }
}