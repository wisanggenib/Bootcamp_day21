import React, { useState, useEffect } from "react";
import { View, Text, Button, ActivityIndicator, TextInput } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { cekLogout } from "../../features/auth/actions";
import { addToDO, cekToDO } from "../../features/todo/actions";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const tempUser = useSelector((state) => {
        return state.auth.tempUser;
    });

    const loading = useSelector((state) => {
        return state.todo.isLoading;
    });

    const list = useSelector((state) => {
        return state.todo.list;
    });

    useEffect(() => {
        dispatch(cekToDO())
    }, [])

    console.log('Load Home')
    return (
        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Welcome {tempUser ? tempUser.name : ''}</Text>
                <Button title='logout' color='red' onPress={() => dispatch(cekLogout())}></Button>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput />
                <Button title='add' color='blue' onPress={() => dispatch(addToDO('Hello'))}></Button>
            </View>
            <View>
                {loading ? <ActivityIndicator color='red' size='large' /> : <Text>{JSON.stringify(list)}</Text>}
            </View>
        </View>
    )
}
export default HomeScreen