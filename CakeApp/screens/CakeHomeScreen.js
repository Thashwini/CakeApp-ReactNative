import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CakeHeader from '../components/CakeHeader'

const CakeHomeScreen = ({navigation,route}) => {

    const {id,cake} = route.params

    return (
        <View>
            <CakeHeader id={id} navigation={navigation}/>
        </View>
    )
}

export default CakeHomeScreen

const styles = StyleSheet.create({})
