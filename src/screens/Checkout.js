import * as React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const Checkout = ({navigation}) => {
    <View>
        <View style={styles.inputContainer}>
            <Text> Enter your shipping information below: </Text>
        </View>
        <View style={styles.inputContainer}>
            <Text> Full name: </Text>
            <TextInput />
        </View>

        <View style={styles.inputContainer}>
            <Text> Address: </Text>
            <TextInput />
        </View>

        <View style={styles.inputContainer}>
            <Text> Email: </Text>
            <TextInput />
        </View>
    </View>
}

export default Checkout;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginRight: 20
    }
});

