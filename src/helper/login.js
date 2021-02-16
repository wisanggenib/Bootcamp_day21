import { Alert } from 'react-native';
import { setLogin } from '../features/auth/actions';
import { LOGIN } from '../features/auth/constants';
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
            console.log(getState().auth)

            if (action.type == LOGIN) {
                const email = action.payload.email
                const password = action.payload.password
                if (email) {

                    let temp = getState().auth.user
                    let tempPass, tempVal
                    temp.map(el => (
                        el.email === email ? tempPass = el.password : el
                    ))

                    if (password !== tempPass) {
                        console.log(password)
                        console.log(tempPass)
                        Alert.alert('Auth Failed', 'Wrong Password or User Not Found')
                    }
                    else {
                        temp.map(el => (
                            el.email === email ? tempVal = el : el
                        ))
                        Alert.alert('Sukses')

                        const SaveData = async () => {
                            await AsyncStorage.setItem('TEMPUSER', JSON.stringify(tempVal))
                            console.log('saved')
                        }
                        console.log("mydata", tempVal)

                        SaveData()
                        dispatch(setLogin(tempVal))
                    }
                } else {
                    Alert.alert('Data Kosong')
                }

                // console.log(action.payload)
                // console.log(getState().auth)
            }

            return next(action);
        };
    };
};
export default loginHelper;
