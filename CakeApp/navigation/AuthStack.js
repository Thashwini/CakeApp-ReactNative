import 'react-native-gesture-handler'
import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SigninScreen from "../screens/authScreens/SigninScreen";

const Stack = createStackNavigator();

export default function AuthStack(){
    return(
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
        </Stack.Navigator>
    )
}