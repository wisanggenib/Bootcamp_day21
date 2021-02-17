import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToDO } from '../features/todo/actions';
import { CEK_TODO } from '../features/todo/constants';

const loginHelper = ({ dispatch, getState }) => {
    // Called when calling applyMiddleware so
    // our middleware can have access to the store
    return (next) => {
        // next is the following action to be run
        // after this middleware
        return (action) => {
            // finally, this is where our logic lives for
            // our middleware.

            if (action.type == CEK_TODO) {
                console.log('RUN CEK')

                const CekDataList = async () => {
                    let oldData = await AsyncStorage.getItem('Todo')
                    let newList = JSON.parse(oldData)
                    if (oldData !== null) {
                        console.log('this is old', oldData)
                    } else {
                        newList = []
                    }

                    dispatch(getToDO(newList))

                }
                CekDataList()

                // console.log(action.payload)
                // console.log(getState().auth)
            }

            return next(action);
        };
    };
};
export default loginHelper;
