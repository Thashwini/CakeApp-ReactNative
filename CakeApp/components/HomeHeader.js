import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {colors,parameters} from '../global/styles';
import { Entypo } from '@expo/vector-icons'; 
import logo from '../Images/logo.jpg';
import { Feather, Octicons } from '@expo/vector-icons'; 
import { withBadge, Badge } from 'react-native-elements';
import { signout } from '../api/CategoriesApi';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { cartActions } from '../Redux/Cart.redux'

export default function HomeHeader({title,type,navigation,route}) {

    var cart = useSelector(state => state.cart.items)

    var totaCount = 0;

    for(let i=0;i<cart.length;i++){
        
        console.log(cart[i].totalAmount)
        totaCount = totaCount + cart[i].qty
        console.log('totaprice')
        console.log(totaCount)
    }

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.clear())

    }

    const BadgeIcon = withBadge(0)(Feather);

    const onSignOut = () => {
        console.log('signed outttt')
        
        // dispatch(cartActions.clearItem())
        // dispatch(cartActions.addtoCart([]))
        navigation.navigate('WelcomeScreen')
    }

    return (
        <View style={styles.header}>          
            <View style={{marginLeft:10, padding:2}}>
                <Entypo 
                name='menu'
                size={24} color="black" 
                style={{alignItems:'center'}}
                onPress= {()=>{
                navigation.toggleDrawer()    
                }}  />
            </View>
            <View>
                <Image
                style={styles.tinyLogo}
                source={logo}
                />
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{marginRight:10, padding:2}}
                
                >
                    <Feather 
                    name="shopping-bag" size={24} color="black" onPress={()=>navigation.navigate('Cart')}  />
                    <Badge
                    status="primary"
                    color="black"
                    value={totaCount}
                    containerStyle={{ position: 'absolute', top: 0, left: 12 }}
                    />
                </View>
                <View style={{marginRight:10, padding:2, marginTop:3}}>
                    <Octicons name="sign-out" size={24} color="black" 
                    onPress={()=>{
                        signout(onSignOut)
                        dispatch(cartActions.clearItem())
                    }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        
        backgroundColor: '#F6F7F9',
        height: 50,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        
    },

    headerText:{
        color: colors.headerText,
        fontSize: 20,
        fontWeight : 'bold',
        paddingLeft: 20,
        textAlignVertical: 'center',

    },

    tinyLogo: {
        width: 35,
        height: 35,
        alignItems:'center',
        justifyContent:'center',
      },
})
