import { createStore, applyMiddleware, combineReducers } from 'redux';

// import globalReducer from './global/reducer';
import authReducer from './auth/reducer';

import loginMiddleware from '../helper/login';
import cekLoginMiddleware from '../helper/ceklogin';

// const logger = (state) => (next) => (action) => {
//   console.log(`Memanggil ${action.type}`);
//   return next(action);
// };

const rootReducer = combineReducers({
    //   global: globalReducer,
    auth: authReducer,
    //   user: userReducer,
});

//2.3 initialize store
const store = createStore(
    rootReducer,
    applyMiddleware(loginMiddleware, cekLoginMiddleware),
);
export default store;
