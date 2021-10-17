import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet,StatusBar, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import HomeHeader from '../components/HomeHeader';
import { getOrders} from '../api/CategoriesApi'
import { ListItem, Divider } from 'react-native-elements'
import {useSelector} from 'react-redux'

export default function MyAccount({navigation}) {



    const [orderList, setorderList] = useState([])

    const onOrderReceived = (orderList) => {
        setorderList(orderList)
    }

    useEffect(() => {
        getOrders(onOrderReceived)
    }, [])

    const totalPrice = useSelector(state => state.cart.totalPrice)


    return (
        <View>
            <StatusBar 
            barStyle= 'dark-content'
            backgroundColor = '#F6F7F9'
            />
            
            <HomeHeader
            navigation={navigation}
            />
            <View style={{justifyContent:'center', alignItems:'center',}}>
                        <Text style={styles.textHeader}>MY ORDERS</Text>
                    </View>

                    <View style={{margin:10}}>
                        <SafeAreaView>
                    
                        <FlatList 
                        data={orderList}
                        ItemSeparatorComponent={()=><Divider></Divider>}
                        keyExtractor={item=>item.id}
                        
                        renderItem={({item})=>{
                            console.log('mmmmmmmmmmmmmttt')
                            console.log(item)
                            return(
                            <TouchableOpacity
                            
                            onPress={()=>{
                                navigation.navigate('AccountDetails',{orderD:item})
                            }}
                            >
                                
                                <View style={{marginLeft:20, margin:10}}>
                                        <Text style={{fontSize:20}}>{item.orderId}</Text>
                                                          
                                </View>
                            </TouchableOpacity>
                            )
                        }}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        // numColumns={2}
                        // ListHeaderComponent={<Text style={styles.textHeader}>OUR PRODUCTS</Text>}
                        />
                        </SafeAreaView>
                    </View>

        </View>
    )
}

const styles = StyleSheet.create({

    textHeader:{
        padding:10,
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    

    
})




