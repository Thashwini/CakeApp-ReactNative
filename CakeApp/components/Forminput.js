import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default function Forminput(props) {
    let{...other} = props
    return (
        <View>
            <TextInput style={styles.text} {...other}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        
        color: "blue",
    }
})

