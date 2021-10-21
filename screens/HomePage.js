import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View, FlatList} from 'react-native';

const HomePage = () => {
    return(
        <View style={styles.container}>
        <Image/>
  
        <Text style={styles.instructions}>
          This is an e-commerce app! It is curently in progress...
          Heh!
        </Text>
  
        <Text style={styles.instructions}> 
          Feel free to check it out and leave your comments
        </Text>
  
        <Text style={styles.instructions}>
          On second thoughts... Don't give your feedback!
        </Text>
  
        <TouchableOpacity 
          onPress={() => alert('The screen navigation option is not available yet!. Wait for it :)')}
          style={styles.button}>
          <Text style={styles.buttonText}> Don't press if you dare! </Text>
        </TouchableOpacity>
  
        <StatusBar style="auto" />
      </View>
    );
  }

  export default HomePage;

  
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
      fontSize: 15,
      color: '#fff'
    }
  });
  