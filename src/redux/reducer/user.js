import { Alert } from "react-native";

const defaultState = {
    name: 'test',
    tempUser: null,
    isLogin: false,
    user: [
        {
            "id": 1,
            "first_name": "Gregor",
            "last_name": "Dubble",
            "email": "rin",
            "gender": "Genderfluid",
            "slogan": "brand bricks-and-clicks e-business",
            "jobs": "Designer",
            "photo": "http://dummyimage.com/123x125.png/ff4444/ffffff",
            "password": "rin"
        },
        {
            "id": 2,
            "first_name": "Testing",
            "last_name": "Last",
            "email": "a@a.a",
            "gender": "Genderfluid",
            "slogan": "Good Luck",
            "jobs": "Tukang Ketik",
            "photo": "http://dummyimage.com/123x125.png/ff4444/ffffff",
            "password": "123456"
        },
    ],

}

//



const _checkLogin = (input) => {
    const email = input.payload.name
    const password = input.payload.password
    if (input) {
        let temp = defaultState.user
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
            // Alert.alert('login success')
            let x = { isLogin: true, data: tempVal }
            // defaultState.isLogin = true
            return x
        }
    } else {
        // Alert.alert('Data Kosong')
        return { isLogin: false, }
    }

}



const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return _checkLogin(action)

        case 'UPDATE_NAME':
            return { ...state, name: action.payload }

        case 'RESET_NAME':
            return { ...state, name: 'TEST' }

        default:
            return state
    }
};

export default userReducer