import React, {useState} from 'react'
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import HomeHeader from '../components/HomeHeader';

const AccountDetails = ({navigation,route}) => {

    const [orderD, setorderD] = useState({
        customerName: route.params.orderD.customerName,
        orderId: route.params.orderD.orderId,
        name: route.params.orderD.Items[0].name,
        price: route.params.orderD.Items[0].price,
        image: route.params.orderD.Items[0].image,
        quantity: route.params.orderD.Items[0].quantity,
        itemId: route.params.orderD.Items[0].itemId
    })
    console.log(orderD)


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
                <Text style={styles.textHeader}>Order Details</Text>
            </View>

            <View>
                <View style={{ padding:5, margin:5, borderRadius:5, }}>
                    <View style={{alignItems:'center'}}>
                    <Image
                    style={styles.tinyLogo}
                    source={{uri:orderD.image}}
                    />
                    </View>
                    <View style={{}}>
                    
                    <Text style={{position:'relative', fontSize:24, fontWeight:'bold', marginLeft:50, marginTop:10}}>{orderD.customerName}</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between',marginLeft:50,marginRight:50}}>
                    <Text style={{position:'relative', fontSize:18, fontWeight:'bold'}}>LKR {orderD.price}.00</Text>
                    <Text style={{position:'relative', fontSize:16,  marginLeft:50, fontWeight:'bold'}}>{orderD.quantity}</Text>
                    </View>
                    </View>

                   
                </View>
            </View>
            <Text></Text>
        </View>
    )
}

export default AccountDetails

const styles = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 100,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
      },

      textHeader:{
        padding:10,
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    btn: {
        
        marginLeft:40,
        marginRight:40,
        marginHorizontal: 10,
        margin:20,
        borderRadius:10,
    },
     
})
