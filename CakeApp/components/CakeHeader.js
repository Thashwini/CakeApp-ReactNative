import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { filterData } from '../global/Data';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const CakeHeader = ({navigation,id}) => {

    const index2 = 10
    const [liked, setliked] = useState(false)
    const [counter, setcounter] = useState(10)
    const [visible, setvisible] = useState(false)

    const likeHandle = () => {
        if(liked==false){
            setvisible(true)
        }  
        
        setliked(!liked)
        setcounter(index2)
    }


    return (
        <View>
            <ImageBackground
            style={{height:300,borderRadius:5, padding:5, margin:5, justifyContent:'space-between'}}
            source={filterData[id].image}
            >
                <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                    <View>
                        <Ionicons name="arrow-back-circle-sharp" size={25} color="black"
                        onPress={()=>navigation.goBack()} 
                        />
                    </View>

                    <View>
                        <MaterialIcons name={liked && (index2==counter) ? "favorite" : "favorite-border"} size={25} color="red" 
                        onPress={likeHandle}
                        />

                    </View>
                </View>
                
                        
            </ImageBackground>
            
            
        </View>
    )
}

export default CakeHeader

const styles = StyleSheet.create({
    container:{

    }
})

