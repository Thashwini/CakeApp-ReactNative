import 'react-native-gesture-handler'
import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import RootNavigator from './navigation/RootNavigator';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SigninScreen from './screens/authScreens/SigninScreen';
import HomeScreen from './screens/HomeScreen';
import RootClientTabs from './navigation/ClientTabs';
import DrawerNavigation from './navigation/DrawerNavigation';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
            name='WelcomeScreen'
            component={WelcomeScreen}
            options={{
              headerShown:false,
              ...TransitionPresets.RevealFromBottomAndroid

          }}
            />
            <Stack.Screen
            name='SigninScreen'
            component={SigninScreen}
            options={{
              headerShown:false,
              ...TransitionPresets.RevealFromBottomAndroid

          }}
            />
            <Stack.Screen
            name='DrawerNavigation'
            component={DrawerNavigation}
            options={{
              headerShown:false,
              ...TransitionPresets.RevealFromBottomAndroid

          }}
            />
        </Stack.Navigator>
        </NavigationContainer>
  )
}

const styles= StyleSheet.create({

})
