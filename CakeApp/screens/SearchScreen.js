import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import SearchComponent from '../components/SearchComponent'
import { filterData } from '../global/Data'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen() {
    return (
        <View>
            <ScrollView>
                <View>
                    <View style={{marginHorizontal:10}}>
                        <SearchComponent />
                    </View>
                    <View>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Text style={styles.textHeader}>OUR PRODUCTS</Text>
                        </View>
                        <View>
                        <FlatList 
                        data={filterData}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=>(
                            <TouchableWithoutFeedback>
                                <View style={styles.imageView}>
                                    <ImageBackground 
                                    style={styles.image}
                                    source={item.image}
                                    >
                                        <View>
                                            <Text>{item.name}</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        // ListHeaderComponent={<Text style={styles.textHeader}>OUR PRODUCTS</Text>}
                        />
                    </View>

                </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    textHeader:{
        padding:10,
        margin:10,
        alignItems:'center',
        justifyContent:'center',
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

    }
    

    
})
