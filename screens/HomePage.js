import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View, FlatList, TextInput} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';



const HomePage = (params) => {
    const [shopItems, setItems] = React.useState(0);

    async function getItems() {
      fetch(
        'https://fakestoreapi.com/products/1'
      )
      .then(res => res.json())
      .then(json => {
      setItems(json);
      console.log(json);
    })
      .catch((e) => {
        console.log(e);
      })
    }

    const DATA = [
      'Card 1',
      'Card 2',
      'Card 3',
      'Card 4',
    ]

    React.useEffect(() => {
      getItems();
    }, []);

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
              padding: 6, marginTop: 7, marginLeft: 8}}
            placeholder = "Enter search here "
          />

          <View style={{
            marginBottom: 20, borderRadius: 8, alignSelf: 'center',
            padding: 5, marginTop: 3, marginRight: 5}}>
            <FontAwesome.Button name='bell' size={24} color='grey' backgroundColor='#e6e4e1' onPress={() => alert('nothing')}>
            </FontAwesome.Button>
          </View>
        </View>
            
        <View style={{
          flex: 0.19, backgroundColor: '#ffa18a', borderRadius: 10, alignItems: 'center', 
          justifyContent: 'center', marginLeft: 6, marginRight: 6}}>
          <Text> Second view </Text>
        </View>

        <View style={{
          flex: 0.77, marginTop: 30, backgroundColor: '#ffa18a', 
          alignItems: 'flex-start', justifyContent: 'flex-start',
          marginLeft: 6, marginRight: 6, borderRadius: 8 }}>
          <FlatList
            data = {DATA}
            renderItem = {({item}) =>
              <View style={{
                padding: 15, height: 220, width: 150,
                backgroundColor: '#fff', marginBottom: 10, marginTop: 5, 
                borderRadius: 8, marginLeft: 13, marginRight: 10
                }}>
                <Text> {item} </Text>
              </View>
            }
            horizontal={false}
            numColumns={2}
          />
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
  