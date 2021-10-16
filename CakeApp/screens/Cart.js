import React from 'react'
import { View, Text, StatusBar, ScrollView, Button, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {useSelector} from 'react-redux'
import CartItem from '../components/CartItems/CartItem'
import HomeHeader from '../components/HomeHeader'
import { addOrders } from '../api/CategoriesApi'

export default function Cart({navigation}) {

    const cart = useSelector(state => state.cart.items)
    console.log('cart')
    console.log(cart)
    var cart2 = useSelector(state => state.cart.items)

    //cart total price
    const totalPrice = useSelector(state=>state.cart.totalPrice)

    var totaprice = 0;

    for(let i=0;i<cart.length;i++){
        
        console.log(cart[i].totalAmount)
        totaprice = parseInt(totaprice) + parseInt(cart[i].totalAmount)
        console.log('totaprice')
        console.log(totaprice)
    }

    var totaCount = 0;

    for(let j=0;j<cart.length;j++){
        
        console.log(cart[j].totalAmount)
        totaCount = totaCount + cart[j].qty
        console.log('totaprice')
        console.log(totaCount)
    }

    //create a new component for the cart item list

    return (
        <ScrollView>
            <View>
            <StatusBar 
            barStyle= 'dark-content'
            backgroundColor = '#F6F7F9'
            />
            <HomeHeader
            navigation={navigation}
            />
            <View>
                <Text style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center', marginTop:40}}>CART</Text>
            </View>
            
            <FlatList
            data={cart}
            keyExtractor={(item)=>item.id}
            renderItem={({item,index})=>{
                console.log('cccccccccccccccccccccccccc')
                console.log(item)
                
                return(
                    <CartItem key={item} items={item}/>
                )
            }}
            />
            {totaCount === 0 ? 
                <View>
                <View style={{margin:20}}>
                    
                    <Text style={styles.text1}>No Items in Cart</Text>
                    
                </View>
                </View> : 
                <View>
                <View style={{margin:20}}>
                    
                    <Text style={styles.text1}>Total Amount :{totaprice}</Text>
                    
                </View>
                <View style={styles.btn}>
                    <Button
                    color= '#B9AB98' 
                    title='CHECKOUT'
                    onPress={()=>
                        {
                            addOrders(cart2)
                            
                        }
                    }
                    />
                </View>
                </View>}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },

    text1:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        padding:20,
        margin:20,
        fontWeight : 'bold',
    },

    text2:{
        color: 'black',
        fontSize: 12,
        textAlign: 'center',
        padding:10,
        margin:10,
        textDecorationLine:'underline',
    },

    text3:{
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
    },

    text4:{
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        textDecorationLine:'underline',
        fontWeight: 'bold',
    },

    TextInput1: {
        borderWidth: 1,
        borderColor:'black',
        marginHorizontal: 10,
        borderRadius:10,
        margin:20,
        marginLeft:40,
        marginRight:40,
        height:40,
        paddingLeft:15,
    },

    btn: {
        
        marginLeft:40,
        marginRight:40,
        marginHorizontal: 10,
        margin:20,
        borderRadius:10,
    },

    TextInput2:{
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal:20,
        borderColor:'black',
        justifyContent:'space-between',
        height:40,
        paddingLeft:15,
    }
})
