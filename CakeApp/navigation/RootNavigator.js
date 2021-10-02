import 'react-native-gesture-handler'
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SigninScreen from "../screens/authScreens/SigninScreen";

const Stack = createStackNavigator();

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
            name='WelcomeScreen'
            component={WelcomeScreen}
            
            />
            <Stack.Screen
            name='SigninScreen'
            component={SigninScreen}
            
            />
        </Stack.Navigator>
        </NavigationContainer>
    )
}