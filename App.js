import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View } from 'react-native';
import favicon from './assets/favicon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={favicon} style={styles.logo}/>

      <Text style={styles.instructions}>
        This is an e-commerce app! It is curently in progress 
      </Text>
      <Text style={styles.instructions}> 
        Feel free to check it out and leave your comments
      </Text>

      <TouchableOpacity 
        onPress={() => alert('The folder navigation option is not available yet!')}
        style={styles.button}>
        <Text style={styles.buttonText}> Button </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //The display type of every view 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal:15,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
});
