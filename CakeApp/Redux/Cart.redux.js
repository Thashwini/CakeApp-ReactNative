import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0
}

export const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addtoCart(state, action){
            //product to add to the cart
            const newItem = action.payload
            console.log('newwwwwwwwwwwwwwwwwwww')
            console.log(newItem)
            // let updatedCart;
            // updatedCart = [...state.items];

            //check if product exists already in cart
            const exists = state.items.find(p=>p.itemId===newItem.itemId)
            //increment cart quantity
            state.totalQuantity++
            //if not exists add/ push
            if(!exists){
                state.items.push({
                    ...newItem,
                    qty: 1,
                    totalAmount: newItem.price
                })

                // [...state.items] = [...state.items, action.payload]

                //update cart total price
                state.totalPrice= newItem.price
                

            }
            else{
                //increment qty the existing product in cart
                exists.qty++
                const itemprice = newItem.price
                state.totalPrice = state.totalPrice += itemprice
                exists.totalAmount = newItem.price * exists.qty
            }

            

        },

        removeItem(state, action){
            const itemToRemove = action.payload
            console.log('tttttttttttttttttttttremoveeeeeeeee')
            console.log(itemToRemove)

            //check here too if the item exists in cart
            const itemExists = state.items.find(p=> p.itemId === itemToRemove.itemId)

            //remove item if the quantity is 1
            if(itemExists.qty===1){
                state.items = state.items.filter(item=>item.itemId != itemToRemove.itemId)
                state.totalPrice = state.totalPrice - itemToRemove.price
            }
            //else decrement the qty
            else{
                itemExists.qty--
                itemExists.totalAmount = itemExists.totalAmount - itemToRemove.price
                state.totalPrice = state.totalPrice - itemExists.price
            }
        }
    }
    
}) 

//export the action types

export const cartActions = CartSlice.actions


const styles = StyleSheet.create({})
