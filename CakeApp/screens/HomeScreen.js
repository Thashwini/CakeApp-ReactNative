import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar, FlatList, Pressable, ScrollView } from 'react-native'
import HomeHeader from '../components/HomeHeader';
import wallpaper from '../Images/wallpaper.jpg';
import { filterData } from '../global/Data';
import card1 from '../Images/card1.jpg';
import card2 from '../Images/card2.jpg'
import { Feather } from '@expo/vector-icons'; 

export default function HomeScreen() {

    const [indexCheck, setindexCheck] = useState('0')
    return (
        <View>
            <ScrollView>
            <StatusBar 
            barStyle= 'dark-content'
            backgroundColor = '#F6F7F9'
            />
            <HomeHeader
            type='menu'
            />
            <View>
                <ImageBackground
                style={styles.tinyLogo}
                source={wallpaper}
                >
                    <Text style={{fontSize:25, color:'white', marginTop:220, fontWeight:'bold', textAlign:'center'}}>A HOME MADE</Text>
                    <Text style={{fontSize:40, color:'white', fontWeight:'bold', textAlign:'center'}}>~ CAKE ~</Text>
                    <Text style={{fontSize:13, color:'white', fontWeight:'bold', textAlign:'center'}}>MAKES ANY OCCATION FEEL</Text>
                    <Text style={{fontSize:25, color:'white', fontWeight:'bold', textAlign:'center'}}>MORE JOYFULL</Text>
                </ImageBackground>
            </View>

            <View>
                <Text style={{fontSize:20, color:'black', fontWeight:'bold', textAlign:'center', marginTop:80}}>OUR PRODUCTS</Text>
            </View>

            <View style={{marginBottom:80}}>
                <FlatList 
                data = {filterData}
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
                keyExtractor = {(item)=>item.id}
                extraData = {indexCheck}
                renderItem={({item,index})=>(
                    <Pressable
                    onPress={()=>{setindexCheck(item.id)}}
                    >
                        <View style={styles.Card}>
                            <View style={indexCheck === item.id ? {...styles.smallCard} : {...styles.smallCardSelected}}>
                                <Image
                                style={{height:75, width:75, borderRadius:10}}
                                source={item.image}
                                />
                            </View>
                            <View>
                                <Text style={{fontSize:10, fontWeight:'bold'}}>{item.name}</Text>
                            </View>
                        </View>
                    </Pressable>
                )}
                />

            </View>
            <View style={{flexDirection:'row', backgroundColor:'#fafafa', marginTop:20,}}>
                <View style={{ margin:20, alignItems:'center', justifyContent:'center',width:150, }}
                
                >
                    <Text style={{fontSize:16, fontWeight:'bold'}}>WE MAKE</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>YOUR</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>BIRTH DAY</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>MORE TASTY</Text>
                </View>
                <View >
                    <Image
                    style={styles.tinyLogo2}
                    source={card1}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', backgroundColor:'#fafafa'}}>
                
                <View>
                    <Image
                    style={styles.tinyLogo3}
                    source={card2}
                    />
                </View>
                <View style={{ alignItems:'center', justifyContent:'center',width:250, paddingRight:40}}
                
                >
                    <Text style={{fontSize:16, fontWeight:'bold'}}>WE MAKE</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>YOUR</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>SPECIAL DAY</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>EVEN MORE</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>SPECIAL</Text>
                </View>
            </View>
            <View style={{ alignItems:'center', justifyContent:'center',marginTop:40,padding:40}}
                
                >
                    <Text>FOOTER</Text>
                </View>
        </ScrollView>
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
        height: 400,
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
