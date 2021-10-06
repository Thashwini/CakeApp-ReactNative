import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import { Feather, MaterialIcons } from '@expo/vector-icons'; 
import MyOrders from '../screens/MyOrders';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
        drawerContent={props=> 
        <DrawerContent
        {...props} 
        />
    }
        screenOptions = {
            {
                
                headerShown: false
    
            }
        }
        >
            <Drawer.Screen
            name="RootClientTabs"
            component={RootClientTabs}
        
            options= {{
                title:'Home',
                drawerIcon: ({focussed,size})=>(
                    <Feather 
                    name="home" 
                    size={24} 
                    color={focussed ? '#B9AB98' : 'black'} 
                    />
                )
            }}
            />

            <Drawer.Screen
            name="MyOrders"
            component={MyOrders}
        
            options= {{
                title:'My Orders',
                drawerIcon: ({focussed,size})=>(
                    <MaterialIcons name="list-alt" size={24} color="black" />
                )
            }}
            />
        </Drawer.Navigator>
    )
}

