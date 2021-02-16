import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
// import { setLogin, login } from "../../features/auth/actions";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const tempUser = useSelector((state) => {
        return state.auth.tempUser;
    });

    console.log('MY TEMP USER', tempUser)

    return (
        <View>
            <Text>Welcome {tempUser.name}</Text>
        </View>
    )
}
export default HomeScreen