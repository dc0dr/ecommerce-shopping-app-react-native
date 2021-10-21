import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View, TextInput} from 'react-native';

const Login = () =>{
    return(
        <View style = {loginStyles.containerView}>
            <Text> Welcome to my store! </Text>

            <Text> Email </Text> 
            
            <TextInput
                style = {loginStyles.textInput}
                placeholder="Enter Email"
            />
            <TextInput 
                style = {loginStyles.textInput}
                placeholder="Enter password"
                />

        </View>
    );
}

export default Login;

const loginStyles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 37,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 12,
        borderRadius: 5,
    }

});