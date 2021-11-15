import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from  '@react-navigation/native-stack';
import Login from './screens/Login';
import HomePage from './screens/HomePage';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Settings from './screens/Settings';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name = 'Login'
        component = {Login}/>
        <Stack.Screen
        name = 'Home'
        component = {HomePage}/>
        <Stack.Screen
        name = 'Settings'
        component = {Settings}/>
        <Stack.Screen
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