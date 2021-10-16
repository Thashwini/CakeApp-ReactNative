import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const IconButton = (onPress, backgroundColor='#000', iconName) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <AntDesign name='plus' size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default IconButton

const styles = StyleSheet.create({})
