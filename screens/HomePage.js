import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View, FlatList, TextInput} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';



const HomePage = () => {
    return(
      <View style={styles.container}>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          justifyContent: 'space-between'
        }}>

          <TextInput 
            style = {{
              borderRadius: 8, fontSize: 15, marginBottom: 20, 
              width: 200, textAlign: 'justify', backgroundColor: '#e6e4e1',
              padding: 5}}
            placeholder = "Enter search here "
          />

          <View style={{
            backgroundColor: '#e6e4e1', marginBottom: 20, borderRadius: 8, justifyContent: 'center',
            paddingHorizontal: 6, paddingVertical: 6 }}>
            <FontAwesome name='bell' size={24} color='black'/>
          </View>
        </View>
            
        <View style={{
          flex: 0.19, backgroundColor: '#888', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
          <Text> Second view </Text>
        </View>

        <View style={{
          flex: 0.68, marginTop: 30, backgroundColor: '#888', alignItems: 'center', justifyContent: 'center'}}>
          <Text> Third view.. </Text>
        </View>
      </View>
    );
  }

  export default HomePage;

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });
  