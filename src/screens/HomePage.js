import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity ,View, FlatList, TextInput, TouchableWithoutFeedback} from 'react-native';
import { AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import merch from '../merch/merch';




const HomePage = ({navigation}) => {

  const Card = ({merch}) => {

      return(
        
        <TouchableWithoutFeedback onPress= {() => navigation.navigate('Product', merch)}>
        <View style={{
          padding: 15, height: 250, width: 150,
          backgroundColor: '#ffffff', marginBottom: 10, marginTop: 5, 
          borderRadius: 8, marginLeft: 15, marginRight: 15
          }}>
          <View style={{alignItems: 'center', padding: 5}}> 
            <Image source= {merch.image} 
            style={{width: 100, height: 120, borderRadius: 15, flex: 1}}/>
          </View>
                
          <View style={{marginTop: 10}}>
              <Text style={{textAlign: 'auto', fontWeight: 'bold'}}> {merch.name} </Text>
          </View>

          <View style={{}}>
            <Text style={{textAlign: 'auto', paddingTop: 5}}> {'$'} {merch.price} </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      ); 
    }

 

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

          <View style={{flexDirection: 'row', marginTop: 7}}>
            <View style = {{
                  borderRadius: 8, flexDirection: 'row', marginBottom: 20, 
                  width: 200, textAlign: 'center', backgroundColor: '#e6e4e1',
                  padding: 8}}>
               <FontAwesome name="search" size={20} color='grey' style={{marginRight: 15, alignSelf: 'center'}}/>
              <TextInput style={{
                fontSize: 15
              }}
                placeholder = "Enter search here "
              />
            </View>
          </View>
          
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
          <Image source={require('../merchImages/store-logo-3.png')} style={{flex: 1, resizeMode: 'cover', height: 150, width: 150}}/>
        </View>

        <View style={{
          flex: 0.77, marginTop: 30, backgroundColor: '#ffa18a', 
          alignItems: 'flex-start', justifyContent: 'flex-start',
          marginLeft: 6, marginRight: 6, borderRadius: 8}}>
          <FlatList
            data = {merch}
            renderItem = {({item}) =>{
              return(<Card merch={item}/>);
            }}
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
  