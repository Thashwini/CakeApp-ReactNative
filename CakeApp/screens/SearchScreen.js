import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Favourities from '../components/Favourites/Favourities';

import SearchComponent from '../components/SearchComponent'
import { filterData } from '../global/Data'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen({navigation}) {
    return (
        <View>
            
                <View style={{marginHorizontal:10}}>
                    <SearchComponent />
                </View>
                
                <View >
                    <View style={{justifyContent:'center', alignItems:'center',}}>
                        <Text style={styles.textHeader}>OUR PRODUCTS</Text>
                    </View>
                    <View style={{alignItems:'center',}}>
                    
                        <FlatList 
                        data={filterData}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=>(
                            <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate('SearchResultScreen',{item:item.name})

                            }}
                            >
                                
                                <View style={{alignItems:'center',margin:5}}>
                                    <View style={styles.imageContainer} style={{alignItems:'center'}}>
                                        <Image
                                        style={{width: SCREEN_WIDTH*0.4475,height: SCREEN_WIDTH*0.4475,}}
                                        source={item.image}
                                        />
                                    </View>
                                    <View style={styles.cardBody}>
                                        <Text>{item.name}</Text>
                                        <Text>Price</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        // ListHeaderComponent={<Text style={styles.textHeader}>OUR PRODUCTS</Text>}
                        />
                        
                    </View>
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

    imageView:{
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        width: SCREEN_WIDTH*0.4475,
         height: SCREEN_WIDTH*0.4475,
         marginLeft: SCREEN_WIDTH*0.035,
         marginBottom: SCREEN_WIDTH*0.035,

    },

    image:{
         width: SCREEN_WIDTH*0.4475,
         height: SCREEN_WIDTH*0.4475,
         borderRadius: 10,

    },

    card:{
        width:280,
        backgroundColor:'red',
        paddingBottom:10,
    },

    imageContainer:{
        // height: 200,

        alignItems:'center',

        marginLeft: SCREEN_WIDTH*0.035,
    },

    cardBody:{
        padding:10,
        alignItems:'center',
        textAlign:'center'
    }
    

    
})
