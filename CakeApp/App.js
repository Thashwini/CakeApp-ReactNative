import 'react-native-gesture-handler'
import React, {useEffect} from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import RootNavigator from './navigation/RootNavigator';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SigninScreen from './screens/authScreens/SigninScreen';
import HomeScreen from './screens/HomeScreen';
import RootClientTabs from './navigation/ClientTabs';
import DrawerNavigation from './navigation/DrawerNavigation';
import SignupScreen from './screens/authScreens/SignupScreen';
import firebase from 'firebase';
import {config} from './firebaseconfig'
import {Provider} from 'react-redux'
import {store} from './Redux/store'





const Stack = createStackNavigator();
export default function App() {

  useEffect(() => {
    
    
  }, [])

  if(!firebase.apps.length){
    firebase.initializeApp(config)
  }
  else{
    firebase.app()
  }

  return (
    <Provider store={store}>
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
            name='SignupScreen'
            component={SignupScreen}
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
        </Provider>
  )
}

const styles= StyleSheet.create({

})
