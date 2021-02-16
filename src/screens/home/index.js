import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { cekLogout } from "../../features/auth/actions";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const tempUser = useSelector((state) => {
        return state.auth.tempUser;
    });

    console.log('Load Home')
    return (
        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Welcome {tempUser ? tempUser.name : ''}</Text>
                <Button title='logout' color='red' onPress={() => dispatch(cekLogout())}></Button>
            </View>
        </View>
    )
}
export default HomeScreen