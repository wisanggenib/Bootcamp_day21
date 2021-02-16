import { createStore, combineReducers } from 'redux';
import { userReducer } from "./reducer";
const rootReducer = combineReducers({
    user: userReducer,
});

//2.3 initialize store
const store = createStore(rootReducer);
export default store;