import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from  '@react-navigation/native-stack';
import favicon from './assets/favicon.png';
import Login from './screens/Login';
import HomePage from './screens/HomePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name = 'Login'
        component = {Login}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;