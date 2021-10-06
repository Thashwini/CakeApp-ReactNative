import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {colors,parameters} from '../global/styles';
import { Entypo } from '@expo/vector-icons'; 
import logo from '../Images/logo.jpg';
import { Feather } from '@expo/vector-icons'; 
import { withBadge, Badge } from 'react-native-elements';

export default function HomeHeader({title,type,navigation}) {
    const BadgeIcon = withBadge(0)(Feather);
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
            <View style={{marginRight:10, padding:2}}>
                <Feather 
                name="shopping-bag" size={24} color="black" />
                 <Badge
              status="primary"
              color="black"
              value={1}
              containerStyle={{ position: 'absolute', top: 0, left: 12 }}
            />
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
