import { Alert } from 'react-native';
import { logOut } from '../features/auth/actions';
import { CEK_LOGOUT, LOG_OUT } from '../features/auth/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginHelper = ({ dispatch, getState }) => {
    // Called when calling applyMiddleware so
    // our middleware can have access to the store
    // console.log('loginhelper', { getState });

    return (next) => {
        // next is the following action to be run
        // after this middleware
        // console.log('loginhelper', { next });
        return (action) => {
            // finally, this is where our logic lives for
            // our middleware.
            if (action.type == CEK_LOGOUT) {
                const RemoveData = async () => {
                    console.log('Do Remove')
                    await AsyncStorage.removeItem('TEMPUSER')
                    Alert.alert('Log Out')
                }
                RemoveData()
                dispatch(logOut())
            }
            return next(action);
        };
    };
};
export default loginHelper;
