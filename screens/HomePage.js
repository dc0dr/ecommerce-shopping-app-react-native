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
  
        <TouchableOpacity 
          onPress={() => alert('Next screen in progress. Wait for it :)')}
          style={styles.button}>
          <Text style={styles.buttonText}> Don't press if you dare! </Text>
        </TouchableOpacity>
  
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
    instructions: {
      color: '#888',
      marginLeft: 10,
      marginBottom: 15,
      textAlign: 'auto'
    },
    button: {
      backgroundColor: 'blue',
      padding: 15,
      borderRadius: 15,
    },
    buttonText: {
      fontSize: 15,
      color: '#fff'
    }
  });
  