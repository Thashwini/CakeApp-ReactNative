import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'

const DetailCard = ({
    onPressCard,
    cakeName,
    images,
    productData,
    OnPressCakeCard
}) => {
    return (
        <View>
            <TouchableOpacity onPress={OnPressCakeCard}>
                <View style={{ padding:5, margin:5, borderRadius:5}}>
                    <ImageBackground
                    style={{height:300,borderRadius:5, padding:5, margin:5}}
                    source={images}
                    >
                        <Text style={{position:'relative', fontSize:20, fontWeight:'bold', marginLeft:10}}>{cakeName}</Text>
                        <Text style={{position:'relative', fontSize:20, fontWeight:'bold', marginLeft:10}}>Price</Text>
                    </ImageBackground>
                </View>
                <View>
                    <Text></Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default DetailCard

const styles = StyleSheet.create({})
