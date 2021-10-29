import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View, TextInput} from 'react-native';

const Login = ({navigation}) => {
    return(
        <View style = {loginStyles.containerView}>
            <Text> Yorozuya </Text>

            <Text> Sign-in </Text>

            <TextInput
                style = {loginStyles.textInput}
                placeholder="Enter Email here"
            />
            <TextInput 
                style = {loginStyles.textInput}
                placeholder="Enter password here"
                />

            <TouchableOpacity 
                onPress={() => navigation.navigate('Home')}
                style={loginStyles.signInButton}>
                    <Text style={loginStyles.signInText}> Sign-in </Text>
            </TouchableOpacity>

            <Text> Don't have an account? </Text>

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
        padding: 10,
        borderRadius: 5,
    },
    signInButton: {
        backgroundColor: 'blue',
        padding: 13,
        borderRadius: 20,
        marginBottom: 15
    },
    signInText: {
        color: '#ffffff'
    }

});