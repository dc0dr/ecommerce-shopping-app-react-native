import * as React from 'react';
import { View, Text , FlatList} from 'react-native';
import HomePage from './HomePage';


const ProductDetails = ({navigation}) => {
    
    const [details, getDetails] = React.useState(' ');
    

    return(

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', fontStyle: 'italic'}}> 
        Product details screen in progress...</Text>
     </View>
     
    );
}
export default ProductDetails;