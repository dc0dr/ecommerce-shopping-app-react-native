import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View, FlatList} from 'react-native';

const HomePage = () => {
    return(
        <View style={styles.container}>
          <View> 
            <Image/>

            <Text style={styles.instructions}>
              This is an e-commerce app! It is curently in progress...
              Heh!
            </Text>

            <TouchableOpacity 
              onPress={() => alert('Next screen in progress. Wait for it :)')}
              style={styles.button}>
              <Text style={styles.buttonText}> Don't press this button </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 30}}>
            <Text> The second view </Text>
          </View>
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
      justifyContent: 'center'
    },
    buttonText: {
      fontSize: 15,
      color: '#fff'
    }
  });
  