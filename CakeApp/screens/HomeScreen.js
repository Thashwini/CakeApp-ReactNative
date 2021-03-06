import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar, FlatList, Pressable, ScrollView, SafeAreaView } from 'react-native'
import HomeHeader from '../components/HomeHeader';
import wallpaper from '../Images/wallpaper.jpg';
import { filterData } from '../global/Data';
import card1 from '../Images/card1.jpg';
import card2 from '../Images/card2.jpg'
import { Feather } from '@expo/vector-icons'; 

export default function HomeScreen({navigation}) {

    const [indexCheck, setindexCheck] = useState('0')
    return (
        <View>
            <SafeAreaView >
            <StatusBar 
            barStyle= 'dark-content'
            backgroundColor = '#F6F7F9'
            />
            <HomeHeader
            navigation={navigation}
            />
            <View>
                <ImageBackground
                style={styles.tinyLogo}
                source={wallpaper}
                >
                    <Text style={{fontSize:25, color:'white', marginTop:200, fontWeight:'bold', textAlign:'center'}}>A HOME MADE</Text>
                    <Text style={{fontSize:40, color:'white', fontWeight:'bold', textAlign:'center'}}>~ CAKE ~</Text>
                    <Text style={{fontSize:13, color:'white', fontWeight:'bold', textAlign:'center'}}>MAKES ANY OCCATION FEEL</Text>
                    <Text style={{fontSize:25, color:'white', fontWeight:'bold', textAlign:'center'}}>MORE JOYFULL</Text>
                </ImageBackground>
            </View>

            <View>
                <Text style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center', marginTop:20}}>OUR PRODUCTS</Text>
            </View>

            <View style={{marginBottom:40}}>
            <SafeAreaView>
                <FlatList 
                data = {filterData}
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
                keyExtractor = {(item)=>item.id}
                extraData = {indexCheck}
                renderItem={({item,index})=>(
                    <View
                    
                    >
                        <View style={styles.Card}>
                            <View style={styles.smallCard}>
                                <Image
                                style={{height:75, width:75, borderRadius:10}}
                                source={item.image}
                                />
                            </View>
                            <View>
                                <Text style={{fontSize:10, fontWeight:'bold'}}>{item.name}</Text>
                            </View>
                        </View>
                    </View>
                )}
                />
                </SafeAreaView>

            </View>
        </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        alignItems:'center',
        marginTop: 100,
    },

    tinyLogo: {
        width: '100%',
        height: 360,
        alignItems:'center',
        justifyContent:'center',
      },

      btn: {       
        marginLeft:60,
        marginRight:60,
        marginHorizontal: 10,
        marginBottom:10,        
        borderRadius:10,
    },

    Card:{
        borderRadius:10,
        justifyContent: 'center',
        alignItems:'center',
        padding:5,
        margin: 10,
    },

    smallCard:{
        borderRadius:10,
        backgroundColor: '#B9AB98',
        justifyContent: 'center',
        alignItems:'center',
        padding:5,
        width: 80,
        height: 80,
        margin: 10,
    },

    smallCardSelected:{
        borderRadius:10,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems:'center',
        padding:5,
        width: 80,
        height: 80,
        margin: 10,
    },

    tinyLogo2: {
        width: 250,
        height: 150,
        alignItems:'center',
        paddingLeft:0,
        marginLeft:0,
        justifyContent:'center',
      },

      tinyLogo3: {
        width: 190,
        height: 250,
        alignItems:'center',
        paddingLeft:0,
        marginLeft:0,
        justifyContent:'center',
      },
})
