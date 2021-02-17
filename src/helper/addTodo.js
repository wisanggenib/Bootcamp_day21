import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToDO } from '../features/todo/actions';
import { ADD_TODO } from '../features/todo/constants';

const loginHelper = ({ dispatch, getState }) => {
    // Called when calling applyMiddleware so
    // our middleware can have access to the store
    return (next) => {
        // next is the following action to be run
        // after this middleware
        return (action) => {
            // finally, this is where our logic lives for
            // our middleware.

            if (action.type == ADD_TODO) {

                const AddList = async () => {
                    let oldData = await AsyncStorage.getItem('Todo')
                    let tempData = JSON.parse(oldData)
                    console.log('this old data', oldData)
                    let newList = []

                    if (oldData !== null) {
                        console.log('do if')
                        console.log(tempData)
                        tempData.push({ id: oldData.length + 1, idUser: 1, agenda: 'hi', status: false })
                        await AsyncStorage.setItem('Todo', JSON.stringify(tempData))

                    } else {
                        console.log('do else')
                        newList.push({ id: 1, idUser: 1, agenda: 'hi agenda baru', status: false })
                        await AsyncStorage.setItem('Todo', JSON.stringify(newList))
                        console.log(newList)
                    }

                    // await AsyncStorage.removeItem('Todo')
                    console.log('proses add')
                    dispatch(setToDO(newList))
                }
                AddList()

                // console.log(action.payload)
                // console.log(getState().auth)
            }

            return next(action);
        };
    };
};
export default loginHelper;
