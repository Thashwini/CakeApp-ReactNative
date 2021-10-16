import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import IconButton from '../iconButton/IconButton'
import {useDispatch} from 'react-redux'
import { cartActions } from '../../Redux/Cart.redux'
import { AntDesign } from '@expo/vector-icons'; 


const CartItem = ({items}) => {
    const {image, title, price, qty, totalAmount, totalPrice} = items

    const dispatch = useDispatch()

    const incrementQuantity = () => {
        dispatch(cartActions.addtoCart(items))
    }

    const decrementQuantity = () => {
        dispatch(cartActions.removeItem(items))
    }

    return (
        <View style={{flexDirection:'row', margin:20}}>
            <View style={{flexDirection:'row'}}>
            <Image
            source={{uri: image}} 
            style={styles.tinyLogo}
            />
            </View>
            <View style={{marginTop:20}}>
                {/* <Text>LKR {price}.00</Text> */}
                <Text style={{marginLeft:20, fontSize:16}}>LKR {totalAmount}.00</Text>
            </View>
            <View style={{flexDirection:'row', marginLeft:80, marginTop:20}}>
                <TouchableOpacity onPress={decrementQuantity} style={{width:20, height:20, backgroundColor:'black', borderRadius:50}}>
                <AntDesign name='minus' size={20} color="white" />
                </TouchableOpacity>
                <Text style={{marginLeft:10, marginRight:10}}>{qty}</Text>
                <TouchableOpacity onPress={incrementQuantity} style={{width:20, height:20, backgroundColor:'black', borderRadius:50}}>
                <AntDesign name='plus' size={20} color="white" />
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    tinyLogo: {
        width: 80,
        height: 80,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
      },
})
