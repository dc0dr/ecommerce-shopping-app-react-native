import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View, TextInput, TouchableHighlight} from 'react-native';

const Login = ({navigation}) => {
    return(
        <View style = {loginStyles.containerView}>
            <Text style = {{marginBottom: 45, fontSize: 40}}> 
            Yorozuya's Hub </Text>

            <Text style = {{fontWeight: 'bold'}}> Sign-in </Text>

            <TextInput
                style = {loginStyles.textInput}
                placeholder="Enter Email/Username here"
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

            <View>
                <Text style = {{marginTop: 30, fontWeight: 'bold'}}> 
                Don't have an account? </Text>

                <TouchableHighlight 
                    onPress={() => alert('We will create a signup page soon')}>
                    <Text style = {{marginTop: 15, textAlign: 'center', color: '#ff5b45'}}> 
                    Register</Text>
                </TouchableHighlight>
            </View>
            

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
        backgroundColor: '#ff5b45', //#ff5b45
        padding: 13,
        borderRadius: 20,
        marginBottom: 15
    },
    signInText: {
        color: '#ffffff'
    }

});