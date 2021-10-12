import React, {useState, useRef} from 'react'
import { View, Text, StyleSheet, Modal, FlatList, TouchableOpacity, Keyboard} from 'react-native'
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { filterData } from '../global/Data'; 
import { useNavigation } from '@react-navigation/native';
import { filter } from 'lodash';

export default function SearchComponent() {

    const [modalVisible, setmodalVisible] = useState(false)
    const [texInputFocused, settexInputFocused] = useState(true)
    const [data, setdata] = useState([...filterData])
    const navigation = useNavigation();

    const textIn = useRef()

    const contains = ({name},query)=>{
        if(name.includes(query)){
            return true
        }
        return false
    }

    const handleSearch = (text) => {
        const dataSearch = filter(filterData,user=>{
            return contains(user,text)
        })
        setdata([...dataSearch])
    }

    return (
        <View style={{width:'100%', paddingTop:20}}>
            <TouchableWithoutFeedback
            onPress={()=>{
                setmodalVisible(true)
            }}
            >
                <View style={styles.searchArea}>
                    <View style={styles.searchIcon}>
                        <Feather name="search" size={24} color='black'/>
                    </View>
                
                    <Text style={{fontSize:14}}>What are you looking for?</Text>
                </View>
            </TouchableWithoutFeedback>

            <Modal
            animationType='fade'
            transparent={false}
            visible={modalVisible}
            >
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.textInput}>
                            <View>
                                <Ionicons
                                name={texInputFocused ? 'arrow-back' : 'search'} 
                                onPress= {()=>{
                                    if(texInputFocused){
                                        setmodalVisible(false)
                                        settexInputFocused(true)
                                    }
                                }}
                                />
                            </View>
                            <TextInput
                            style={{width:'90%'}}
                            placeholder=""
                            autoFocus={false}
                            ref={textIn}

                            onFocus={()=>{
                                settexInputFocused(true)
                            }}
                            onBlur={()=>{
                                settexInputFocused(false)
                            }}
                            onChangeText={handleSearch}

                    
                            />

                            <View>
                                <Ionicons
                                name={texInputFocused ? 'close-outline' : null} 
                                onPress= {()=>{
                                    if(texInputFocused){
                                        textIn.current.clear()
                                    }
                                }}
                                />
                            </View>

                        </View>

                    </View>

                    <FlatList 
                data = {data}
                renderItem={({item})=>(
                    
                    <TouchableOpacity
                    onPress={()=>{
                        Keyboard.dismiss
                        navigation.navigate('SearchResultScreen',{item:item.name})
                        setmodalVisible(false)
                        
                    }}
                    >
                        <View style={styles.view2}>
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item=>item.id}
                />

                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    text1:{
        fontSize:16,
    },

    textInput:{
        borderWidth:1,
        borderRadius:10,
        marginHorizontal:0,
        borderColor:'#ccc',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,

    },

    searchArea:{
        width:'100%',
        height:50,
        backgroundColor:'#ccc',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#ccc',
        flexDirection:'row',
        alignItems:'center',
    },

    searchIcon:{
        fontSize:20,
        padding:5,
        color:'#fafafa'
    },

    view1:{
        height:70,
        justifyContent:'center',
        paddingHorizontal:10,
    },

    view2:{
        flexDirection:'row',
        padding:10,
        alignItems:'center'

    },

    icon2:{
        fontSize:20,
        padding:5,
        color:'#fafafa',
    },

    modal:{
        flex:1,
    }

})