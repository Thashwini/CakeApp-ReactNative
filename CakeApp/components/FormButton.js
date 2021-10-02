import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

export default function FormButton(props) {
    let {
        
        primary,
        text,
        ...others

    } = props
    return (
        <View>
            <TouchableOpacity
          style={styles.button}
          {...others}
        >
          <Text>{text}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    
  });
