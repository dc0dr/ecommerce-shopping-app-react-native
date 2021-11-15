import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View, FlatList, TextInput, TouchableWithoutFeedback} from 'react-native';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';



const HomePage = ({navigation}) => {
    const [shopItems, setItems] = React.useState(' ');

    async function getItems() {
      fetch(
        'https://fakestoreapi.com/products'
      )
      .then(res => res.json())
      .then(resjson => {
      setItems(resjson);
      //console.log(resjson);
    })
      .catch((e) => {
        //console.log(e);
      })
    }

    // console.log(shopItems[0].id)
    /*
    {
     id: number,
     title: string,
     price: float (number),
     description: string,
     image: URL
    }
    */
    
    let shop1 = shopItems[0]
    let shop2 = shopItems[1]
    let shop3 = shopItems[2]
    let shop4 = shopItems[3]
    let shop5 = shopItems[4]
    let shop6 = shopItems[5]
    let shop7 = shopItems[6]
    let shop8 = shopItems[7]
    // console.log (shop1.image)
    
    
    let DATA = [
      [shop1.image,
      shop1.title,
      shop1.price],
      [shop2.image,
      shop2.title,
      shop2.price],
      [shop3.image,
      shop3.title,
      shop3.price],
      [shop4.image,
      shop4.title,
      shop4.price],
      [shop5.image,
      shop5.title,
      shop5.price],
      [shop6.image,
      shop6.title,
      shop6.price],
      [shop7.image,
      shop7.title,
      shop7.price],
      [shop8.image,
      shop8.title,
      shop8.price],
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

          <View style={{
              marginBottom: 20, borderRadius: 8, alignSelf: 'center',
              padding: 6, marginTop: 7, marginLeft: 5, backgroundColor: '#e6e4e1'}}>
            <TouchableWithoutFeedback onPress = {() => navigation.navigate('Cart')}>
              <Feather name='shopping-cart' size={24} color='grey' />
            </TouchableWithoutFeedback>
          </View>

          <TextInput 
            style = {{
              borderRadius: 8, fontSize: 15, marginBottom: 20, 
              width: 200, textAlign: 'center', backgroundColor: '#e6e4e1',
              padding: 6, marginTop: 7}}
            placeholder = "Enter search here "
          />

          <View style={{
              marginBottom: 20, borderRadius: 8, alignSelf: 'center',
              padding: 6, marginTop: 7, marginRight: 5, backgroundColor: '#e6e4e1'}}>
            <TouchableWithoutFeedback
              onPress = {() => navigation.navigate('Settings')}>
              <Feather name='settings' size={24} color='grey' />
            </TouchableWithoutFeedback>
          </View>
        </View>
            
        <View style={{
          flex: 0.19, backgroundColor: '#ffa18a', borderRadius: 10, alignItems: 'center', 
          justifyContent: 'center', marginLeft: 6, marginRight: 6}}>
          <Text> Second view... </Text>
        </View>

        <View style={{
          flex: 0.77, marginTop: 30, backgroundColor: '#ffa18a', 
          alignItems: 'flex-start', justifyContent: 'flex-start',
          marginLeft: 6, marginRight: 6, borderRadius: 8}}>
          <FlatList
            data = {DATA}
            renderItem = {({item}) =>
            <TouchableWithoutFeedback onPress= {() => navigation.navigate('Product')}>
              <View style={{
                padding: 15, height: 220, width: 150,
                backgroundColor: '#fff', marginBottom: 10, marginTop: 5, 
                borderRadius: 8, marginLeft: 13, marginRight: 10
                }}>
                <View style={{alignItems: 'center', padding: 5}}> 
                  <Image source= {{uri: item[0]}} 
                  style={{width: 100, height: 95}}/>
                </View>
                      
                <View style={{marginTop: 10}}>
                    <Text style={{textAlign: 'auto', fontWeight: 'bold'}}> {item[1]} </Text>
                </View>

                <View style={{}}>
                  <Text style={{textAlign: 'auto', paddingTop: 5}}> {'GHS'} {item[2]} </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
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
  