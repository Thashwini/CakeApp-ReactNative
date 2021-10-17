import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Image, Button, StatusBar } from 'react-native'
import {colors,parameters} from '../global/styles';
import logo from '../Images/welcome.png'
import { subscribeToAuthChanges } from '../api/CategoriesApi';

export default function WelcomeScreen({navigation}) {

    useEffect(() => {
        subscribeToAuthChanges(onAuthStateChanged)
        
    }, [])

    const onAuthStateChanged = (user) =>{
        if(user !== null){
            navigation.navigate('DrawerNavigation')
        }
    }


    return (
        <View>
            <StatusBar 
            barStyle= 'light-content'
            backgroundColor = '#B9AB98'
            />
            
        <View style={styles.imageContainer}>
            <Image
            style={styles.tinyLogo}
            source={logo}
            />
        </View>
        <View style={{marginTop:50}}>
            <View style={styles.btn}>
                    <Button 
                    title='SIGN IN'
                    color= '#B9AB98'
                    marginLeft='60'
                    marginRight='60'
                    style={styles.btn}
                    onPress={()=>{navigation.navigate('SigninScreen')}}
                    />

                </View>
                <View style={styles.btn}>
                    <Button 
                    title='CREATE ACCOUNT'
                    color= 'black'
                    marginLeft='40'
                    marginRight='40'
                    style={styles.btn}
                    onPress={()=>{navigation.navigate('SignupScreen')}}
                    />

                </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        alignItems:'center',
        marginTop: 100,

    },

    tinyLogo: {
        width: 300,
        height: 300,
        alignItems:'center',
        justifyContent:'center',
      },

      btn: {
        
        marginLeft:60,
        marginRight:60,
        marginHorizontal: 10,
        marginBottom:10,
        
        borderRadius:10,
    },
})
