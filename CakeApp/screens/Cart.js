import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { FlatList } from 'react-native-gesture-handler'
import {useSelector} from 'react-redux'
import CartItem from '../components/CartItems/CartItem'

export default function Cart() {

    const cart = useSelector(state => state.cart.items)
    console.log('cart')
    console.log(cart)

    //cart total price
    const totalPrice = useSelector(state=>state.cart.totalprice)

    //create a new component for the cart item list

    return (
        <View>
            <Text>Cart</Text>
            <FlatList
            data={cart}
            keyExtractor={(item)=>item.id}
            renderItem={({item,index})=>{
                
                console.log(item)
                
                return(
                    
                    <CartItem items={item}/>
                    
                    


                )
            }}
                
            // <CartItem items={item}/>
            
        
            />
            <View>
                <Text>Total Amount :{Math.floor(totalPrice)}</Text>
            </View>
            <View>
                <Button 
                title='CHECKOUT'
                />
            </View>
        </View>
    )
}
