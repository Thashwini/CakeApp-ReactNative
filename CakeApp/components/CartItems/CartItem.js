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
        <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row'}}>
            <Image
            source={{uri: image}} 
            style={styles.tinyLogo}
            />
            </View>
            <View>
                {/* <Text>LKR {price}.00</Text> */}
                <Text style={{marginLeft:20}}>LKR {totalAmount}.00</Text>
            </View>
            <View style={{flexDirection:'row', marginLeft:20}}>
                <TouchableOpacity onPress={decrementQuantity}>
                <AntDesign name='minus' size={24} color="black" />
                </TouchableOpacity>
                <Text style={{marginLeft:10, marginRight:10}}>{qty}</Text>
                <TouchableOpacity onPress={incrementQuantity}>
                <AntDesign name='plus' size={24} color="black" />
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
      },
})
