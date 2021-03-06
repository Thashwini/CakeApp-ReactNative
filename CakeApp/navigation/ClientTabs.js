import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons'; 
import HomeScreen from '../screens/HomeScreen';
import Cart from '../screens/Cart';
import MyAccount from '../screens/MyAccount';
import { colors } from '../global/styles';
import FavoriteScreen from '../screens/FavoriteScreen';
import SearchScreen from '../screens/SearchScreen';
import ClientStack from './ClientStack';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
    return (
        <ClientTabs.Navigator
            screenOptions = {
                {
                    tabBarActiveTintColor: '#B9AB98',
                    tabBarIconStyle:{
                        color: '#B9AB98'
                    },
                    headerShown: false
        
                }
            }
        >
            <ClientTabs.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
                tabBarLabel:"Home",
                tabBarIcon:({color,size})=>{
                    return <Feather name="home" size={size} color={color} />
                }
            }}
             />

        <ClientTabs.Screen
            name='Cart'
            component={Cart}
            options={{
                tabBarLabel:"Cart",
                tabBarIcon:({color,size})=>{
                    return <Feather 
                    name="shopping-bag" size={size} color={color} />
                }
            }}
             />

            <ClientTabs.Screen
            name='ClientStack'
            component={ClientStack}
            options={{
                tabBarLabel:"Shop",
                tabBarIcon:({color,size})=>{
                    return <MaterialCommunityIcons name="cupcake" size={24} color={color} />
                    
                }
            }}
             />

            <ClientTabs.Screen
            name='MyAccount'
            component={MyAccount}
            options={{
                tabBarLabel:"My Orders",
                tabBarIcon:({color,size})=>{
                    return <MaterialIcons name="list-alt" size={24} color={color} />
                }
            }}
             />

            
        </ClientTabs.Navigator>
    )
}
