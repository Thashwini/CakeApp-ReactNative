import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function Favourities() {

    const favs = useContext(contextValue)
    return (
        <TouchableOpacity>
            <AntDesign name="heart" size={24} color="black" />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    favs:{
        position:'absolute',
        left:10,
        top:30,
        zIndex:100,

    }
})
