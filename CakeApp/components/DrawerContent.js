import React from 'react'
import { View, Text, Linking, Pressable, Alert, Switch, Button, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { FontAwesome, Octicons, MaterialIcons } from '@expo/vector-icons'; 


export default function DrawerContent(props) {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={{flexDirection:'row', padding:10, paddingBottom:0, margin:10, backgroundColor:'#B9AB98', height:60}}>
                    <FontAwesome name="user" size={24} color="white" />
                    <Text style={{paddingLeft:10, fontSize:20, fontWeight:'bold', color:'white'}}>THASHWINI</Text>
                </View>
        
                <DrawerItemList {...props}/>

                <DrawerItem
                label='Favorites'
                icon= {({color,size})=>(
                   <MaterialIcons name="favorite-outline" size={24} color='black' />
                )}
                />

                <View style={{}}>
                    <Text style={styles.preference}>Preferences</Text>
                    <View style={styles.switchText}>
                        <Text styles={styles.darkThemeText}>Dark Theme</Text>
                        <View style={{paddingLeft:10}}>
                            <Switch 
                            trackColor={{false:'#767577',true:'#81b0ff'}}
                            thumbColor={'#f4f3f4'}
                            />

                        </View>

                    </View>
                </View>

                
            </DrawerContentScrollView>

            <DrawerItem
                label='SIGN OUT'
                icon= {({color,size})=>(
                    <Octicons name="sign-out" size={24} color="black" />

                )}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    drawerHeaderText:{
        
        paddingLeft: 10,
        paddingRight:10,
        marginLeft:10,
        marginRight:10,
        fontSize:16,
        fontWeight:'bold'

    },

    preference:{
        paddingLeft: 10,
        paddingRight:10,
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        fontSize:16,
    },

    switchText:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },

    darkThemeText:{
        fontSize:16,
        paddingTop:10,
        paddingLeft:10,
    }
})
