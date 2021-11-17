import * as React from 'react';
import { View, Text , FlatList, Image, ImageBackground, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ProductDetails = ({navigation, route}) => {
    
    const merch = route.params;

    return(

    <ScrollView>

        <View style={{
                paddingHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15
            }}> 
                <Ionicons name="md-arrow-back" size={28} onPress={() => navigation.goBack()}/>
                <Image source={require('../merchImages/store-logo-3.png')} style={{flex: 1, resizeMode: 'contain', height: 50, width: 200, borderRadius: 20}}/>
                <Ionicons name="cart" size={28} onPress={() => navigation.navigate('Cart')} />
        </View>

        <ScrollView 
        nestedScrollEnabled={true} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
            <View style={{
                padding: 9,
                marginTop: 10,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={merch.image} style={{
                    height: 500,
                    width: 300,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10
                }} />
            </View>

            <View style={{
                padding: 9,
                marginTop: 10,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={merch.image} style={{
                    height: 500,
                    width: 300,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10
                }} />
            </View>
            
        </ScrollView>
        
       
        <View style={{
            width: 'auto',
            marginTop: 10,
            backgroundColor: '#d4d4d4',
            marginHorizontal: 7,
            marginBottom: 7,
            borderRadius: 20,
        }}> 
            <Text style={{
                marginTop: 15, textAlign: 'center', fontSize: 20, fontWeight: 'bold',
                padding: 6
                }}>
                <Text> {merch.name} </Text>
            </Text>

            <Text style={{marginTop: 10, fontSize: 12,
            padding: 8, textAlign: 'center'}}>
                <Text style={{fontWeight: 'bold'}}> Description {"\n"} </Text>
                <Text>  {merch.description} </Text>
            </Text>
            
        </View>
     </ScrollView>
     
    );
}
export default ProductDetails;