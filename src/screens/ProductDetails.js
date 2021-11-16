import * as React from 'react';
import { View, Text , FlatList, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ProductDetails = ({navigation, route}) => {
    
    const merch = route.params;

    return(

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{
                paddingHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}> 
                <Ionicons name="md-arrow-back" size={28} onPress={() => navigation.goBack()}/>
            </View>
        <View style={{
                marginTop: 10,
                flex: 0.55,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={merch.image} style={{
                    height: 300,
                    width: 300,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10
                }} />
            </View>

            <View style={{
                flex: 0.45,
                width: 'auto',
                marginTop: 20,
                backgroundColor: '#d4d4d4',
                marginHorizontal: 7,
                marginBottom: 7,
                borderRadius: 20,
            }}> 
                <Text style={{marginTop: 10, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
                    <Text> {merch.name} </Text>
                </Text>

                <Text style={{marginTop: 10, textAlign: 'center', fontSize: 15}}>
                    <Text> {merch.description} </Text>
                </Text>
               
            </View>
     </View>
     
    );
}
export default ProductDetails;