import React from 'react'
import { Dimensions, StyleSheet, Text, View, FlatList } from 'react-native'
import { TabRouter } from 'react-navigation'
import DetailCard from '../components/DetailCard'
import { filterData } from '../global/Data'

const SCREEN_WIDTH =Dimensions.get('window').width

const SearchResultScreen = ({navigation,route}) => {
    return (
        <View>
            <View>
                <FlatList
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
                />
            </View>
        </View>
    )
}

export default SearchResultScreen

const styles = StyleSheet.create({
     
})
