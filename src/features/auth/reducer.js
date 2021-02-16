import { LOG_OUT, SET_LOGIN } from './constants';

const defaultState = {
    isLogin: false,
    dataLogin: {
        id: null,
    },
    tempUser: null,
    user: [
        {
            "id": 1,
            "name": "rinrin",
            "email": "rin",
            "password": "rin"
        },
        {
            "id": 2,
            "name": "Testing",
            "email": "a@a.a",
            "password": "123456"
        },
    ],
};

const reducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case SET_LOGIN:
            return { isLogin: true, tempUser: actions.payload };
            break;
        case LOG_OUT:
            return { isLogin: false, tempUser: null };
            break;

        default:
            return state;
            break;
    }
};

export default reducer;
