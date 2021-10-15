import React, {useState} from 'react'
import { Dimensions, StyleSheet, Text, View, FlatList, Image, Button, StatusBar } from 'react-native'
import { TabRouter } from 'react-navigation'
import DetailCard from '../components/DetailCard'
import { filterData } from '../global/Data'
import logo from '../Images/logo.jpg'
import HomeHeader from '../components/HomeHeader';
import {useDispatch} from 'react-redux'
import { cartActions } from '../Redux/Cart.redux'

const SCREEN_WIDTH =Dimensions.get('window').width

const SearchResultScreen = ({navigation,route}) => {

    const [cakeD, setcake] = useState({
        name: route.params.cakeD.name,
        price: route.params.cakeD.price,
        image: route.params.cakeD.image,
        quantity: route.params.cakeD.quantity

    })
    
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addtoCart(cakeD))
        navigation.navigate('Cart')

    }

    
    


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
                <Text style={styles.textHeader}>Details</Text>
            </View>
            <View>
                <View style={{ padding:5, margin:5, borderRadius:5, }}>
                    <View style={{alignItems:'center'}}>
                    <Image
                    style={styles.tinyLogo}
                    source={{uri:cakeD.image}}
                    />
                    </View>
                    <View style={{}}>
                    
                    <Text style={{position:'relative', fontSize:30, fontWeight:'bold', marginLeft:50, marginTop:10}}>{cakeD.name}</Text>
                    <Text style={{position:'relative', fontSize:20, fontWeight:'bold', marginLeft:50}}>LKR {cakeD.price}.00</Text>
                    <Text style={{position:'relative', fontSize:16,  marginLeft:50}}>{cakeD.quantity}</Text>
                    </View>

                    <View style={{margin:10}}>
                        <Button
                        title='ADD TO CART'
                        onPress={addToCart} 
                        />
                    </View>
                   
                </View>
                {/* <FlatList
                data={filterData}
                keyExtractor={(item,index)=>index.toString()} 
                renderItem = {({item,index})=>(
                    <DetailCard
                    screenwidth={SCREEN_WIDTH}
                    images={item.image} 
                    cakeName={item.name}
                    OnPressCakeCard={()=>{navigation.navigate('CakeHomeScreen',{id:index,cake:item.name})}}
                    />
                )}
                ListHeaderComponent={
                <View>
                    <Text>Search Results for{route.params.item}</Text>
                </View>
                }
                showsHorizontalScrollIndicator={false}
                /> */}
            </View>
        </View>
    )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    tinyLogo: {
        width: 250,
        height: 250,
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
     
})
