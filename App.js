import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from  '@react-navigation/native-stack';
import Login from './src/screens/Login.js';
import HomePage from './src/screens/HomePage.js';
import ProductDetails from './src/screens/ProductDetails.js';
import Cart from './src/screens/Cart.js';
import Checkout from './src/screens/Checkout';
import Settings from './src/screens/Settings.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        // name = 'Login'
        // component = {Login}/>
        // <Stack.Screen
        name = 'Home'
        component = {HomePage}/>
        <Stack.Screen
        name = 'Settings'
        component = {Settings}/>
        <Stack.Screen
        options={{
          headerShown: false,
        }}
        name = 'Product'
        component = {ProductDetails}/>
        <Stack.Screen
        name = 'Cart'
        component = {Cart}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;