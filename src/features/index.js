import { createStore, applyMiddleware, combineReducers } from 'redux';

import authReducer from './auth/reducer';
import todoReducer from './todo/reducer';

import loginMiddleware from '../helper/login';
import cekLoginMiddleware from '../helper/ceklogin';
import cekLogoutMiddleware from '../helper/logout';
import cekAddMiddleWare from '../helper/addTodo';
import cekLoadMiddleWare from '../helper/loadTodo';

// const logger = (state) => (next) => (action) => {
//   console.log(`Memanggil ${action.type}`);
//   return next(action);
// };

const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer,
});

//2.3 initialize store
const store = createStore(
    rootReducer,
    applyMiddleware(loginMiddleware, cekLoginMiddleware, cekLogoutMiddleware, cekAddMiddleWare, cekLoadMiddleWare),
);
export default store;
