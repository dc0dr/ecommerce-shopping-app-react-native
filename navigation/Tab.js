import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcons from '../StyleComponents/TabIcons';
import HomePage from '../src/screens/HomePage';
import Cart from '../src/screens/Cart';
import Settings from '../src/screens/Settings';

const endTab = createBottomTabNavigator();

const Tab = ({navigation,route}) => {

    return(
        <endTab.Navigator
            initialRouteName='Home'>
                
            <endTab.Screen
                name='Home'
                component={HomePage}/>

            <endTab.Screen 
                name='Cart'
                component={Cart}/>

        </endTab.Navigator>
    );

}

export default Tab;