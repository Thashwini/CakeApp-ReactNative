import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function  ({text}) {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        
        color: "blue",
        margin: '10px',
        padding:'5px',
    }
})