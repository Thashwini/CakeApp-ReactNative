import React from 'react'
import { View, StyleSheet } from 'react-native';
import Title from "../components/Title"
import Form from '../components/Form';

export default function Layout({children}) {
    return (
        <View style={styles.container}>
      {children}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });