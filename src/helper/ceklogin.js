import { Alert } from 'react-native';
import { setLogin } from '../features/auth/actions';
import { CEK_STATUS } from '../features/auth/constants';
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
            if (action.type == CEK_STATUS) {
                console.log('CEK STATUS DOLO')

                const GetSaveData = async () => {
                    console.log('Jalan')
                    const rawValue = await AsyncStorage.getItem('TEMPUSER')
                    const value = JSON.parse(rawValue)
                    if (value) {
                        Alert.alert('Already Login')
                        dispatch(setLogin(value))
                    } else {
                        Alert.alert('Please Login')
                    }
                }

                GetSaveData()
            }

            // console.log('loginhelper', { action });
            return next(action);
        };
    };
};
export default loginHelper;
