import * as React from 'react';
import { 
    Image, StyleSheet, Text, TouchableOpacity ,View, TextInput, TouchableHighlight, Button, TouchableWithoutFeedback, ImageBackground
    } from 'react-native';



const Login = ({navigation}) => {
    return(
        <ImageBackground source={require('../merchImages/yorozuya-bg.jpg')} style = {loginStyles.containerView}>
            <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000c0', flex: 1}}>
            <Image source={require('../merchImages/store-logo-3.png')} style={{height: 200, width: 200, borderRadius: 20}} />

            <Text style = {{fontWeight: 'bold', color: '#ffffff', marginTop: 15}}> Sign-in </Text>

            <TextInput
                style = {loginStyles.textInput}
                placeholder="Enter Email/Username here"
            />
            <TextInput 
                style = {loginStyles.textInput}
                placeholder="Enter password here"
                secureTextEntry={true}
                />

            <TouchableOpacity 
                onPress={() => navigation.navigate('Home')}
                style={loginStyles.signInButton}>
                    <Text style={loginStyles.signInText}> Sign-in </Text>
            </TouchableOpacity>

            <View>
                <Text style = {{marginTop: 30, fontWeight: 'bold', color: '#ffffff'}}> 
                Don't have an account? </Text>
                <TouchableWithoutFeedback
                onPress={() => alert('The sign-up page will be created soon!')}
                > 
                   <Text 
                   style = {{marginTop: 15, textAlign: 'center', color: '#ff5b45'}}> 
                   Register </Text>
                </TouchableWithoutFeedback>
            </View>
            </View>
            
            </ImageBackground>
    )
}

export default Login;

const loginStyles = StyleSheet.create({
    containerView: {
        flex: 1,
        resizeMode: 'cover'
        // backgroundColor: '#ffffff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    textInput: {
        height: 37,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        color: '#ffffff',
        borderColor: '#ffffff'
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