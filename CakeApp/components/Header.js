 import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {colors,parameters} from '../global/styles';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function Header ({title,type,navigation}) {
    return(
        <View style={styles.header}>
            <View style={{marginLeft:10, padding:2}}>
            {/* <Entypo 
            name={type}
            size={24} color="white" 
            style={{alignItems:'center'}}
            onPress= {()=>{}}  /> */}
            <AntDesign name="arrowleft" size={24} color="white"
            onPress= {()=>{navigation.goBack()}} 
            />
            
            </View>
            <View><Text style={styles.headerText}>{title}</Text></View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    header: {
        
        backgroundColor: '#B9AB98',
        height: 50,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        
        
    },

    headerText:{
        color: colors.headerText,
        fontSize: 20,
        fontWeight : 'bold',
        paddingLeft: 20,
        textAlignVertical: 'center',

    }
})