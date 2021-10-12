import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import CakeHomeScreen from '../screens/CakeHomeScreen';

const ClientSearch = createStackNavigator()

const ClientStack = () => {
    return (
        <ClientSearch.Navigator>
            <ClientSearch.Screen
            name='SearchScreen'
            component={SearchScreen}
            options={
                ()=>({
                    headerShown:false
                })


            }
            />

            <ClientSearch.Screen
            name='SearchResultScreen'
            component={SearchResultScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
            />

            <ClientSearch.Screen
            name='CakeHomeScreen'
            component={CakeHomeScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
            />

            
        </ClientSearch.Navigator>
    )
}

export default ClientStack

const styles = StyleSheet.create({})
