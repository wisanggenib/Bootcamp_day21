import { GET_TODO, SET_TODO } from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultState = {
    isLoading: true,
    list: [],
};

const reducer = (state = defaultState, actions) => {
    switch (actions.type) {
        case GET_TODO:
            const newList = actions.payload
            return { ...state, isLoading: false, list: newList };
            break;

        case SET_TODO:
            const newData = actions.payload
            console.log(newData)
            return { ...state, isLoading: false, list: newData };
            break;

        default:
            return state;
            break;
    }
};

export default reducer;