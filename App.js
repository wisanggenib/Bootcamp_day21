import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, LoginScreen } from "./src/screens/index";
import store from './src/features';
const Stack = createStackNavigator();
import { cekStatus } from "./src/features/auth/actions";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cekStatus())
  }, [])

  const isLogin = useSelector((state) => {
    return state.auth.isLogin;
  });

  console.log(isLogin)
  return (
    <NavigationContainer >
      <Stack.Navigator>
        {
          isLogin === false ?
            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />
            :
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
        }
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const MasterApp = (props) => {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};

export default MasterApp