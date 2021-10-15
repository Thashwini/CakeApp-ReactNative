import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import IconButton from '../iconButton/IconButton'
import {useDispatch} from 'react-redux'
import { cartActions } from '../../Redux/Cart.redux'


const CartItem = ({items}) => {
    const {image, title, price, qty, totalAmount} = items

    const dispatch = useDispatch()

    const incrementQuantity = () => {
        dispatch(cartActions.addtoCart(items))
    }

    const decrementQuantity = () => {
        dispatch(cartActions.removeItem(Items))
    }

    return (
        <View>
            <View>
            <Image
            source={{uri: image}} 
            />
            </View>
            <View>
                <Text>{title}</Text>
                <Text>LKR {price}.00</Text>
                <Text>{totalAmount}</Text>
            </View>
            <View>
                <IconButton 
                iconName='minus'
                onPress={decrementQuantity}
                />
                <Text>{qty}</Text>
                <IconButton 
                iconName='plus'
                onPress={incrementQuantity}
                />
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({})
