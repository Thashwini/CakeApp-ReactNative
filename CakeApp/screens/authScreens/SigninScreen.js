import React, {useState, useRef} from 'react'
import { View, Text, StyleSheet, TextInput, Button, StatusBar } from 'react-native'
import {colors,parameters} from '../../global/styles';
import Header from '../../components/Header';

export default function SigninScreen({navigation}) {

    const [textInputFoccused, settextInputFoccused] = useState(false);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    const onsubmit = (email,password) => {

        const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!email && !password){
            alert('Please enter all the required fields')
        }
        else if(!reg.test(email)){
            alert('Invalid Email')
        }
        else{
            // firebase.auth().createUserWithEmailAndPassword(email,password)
            // .then(user=>{
            //     setsuccessmessage('User Registered Successfully')
            //     seterrormessage('')
            //     alert('success')
            //     navigation.navigate('DrawerNavigation')

            // }).catch(err=>seterrormessage(err.message))
            navigation.navigate('DrawerNavigation')
        }
    }

    return (
        
        <View style={styles.container}>
            <StatusBar 
            barStyle= 'light-content'
            backgroundColor = '#B9AB98'
            />
            <Header 
            title='SIGN IN'
            type="arrowleft"
            navigation={navigation}
            />

            <View style={{marginTop:50}}>

                <View>
                    <Text style={styles.text1}>SIGN IN</Text>
                </View>

                <View>
                    <View>
                        <TextInput
                        style={styles.TextInput1}
                        placeholder= 'Email'
                        ref={textInput1}
                        onFocus={()=>{
                            settextInputFoccused(false)
                        }}
                        onBlur={()=>{
                            settextInputFoccused(true)
                        }}
                        onChangeText={(text)=>setemail(text)}

                        />
                    </View> 
                    <View>
                        <TextInput
                        style={styles.TextInput1}
                        placeholder= 'Password'
                        ref={textInput2}
                        onChangeText={(text)=>setpassword(text)}

                        />
                    </View>
                    <View style={styles.btn}>
                        <Button 
                        title='SIGN IN'
                        color= '#B9AB98'
                        marginLeft='40'
                        marginRight='40'
                        style={styles.btn}
                        onPress={()=>{
                            // navigation.navigate('DrawerNavigation')
                            
                            onsubmit(email,password)
                        }}
                        />

                    </View>
                </View>

                <View>
                    <Text style={styles.text2}>Forgot Password?</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text style={styles.text3}>Haven't Register Yet? </Text>
                    <Text style={styles.text4}
                    onPress={()=>{
                        navigation.navigate('SignupScreen')
                    }}
                    >SIGN UP</Text>
                </View>

            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },

    text1:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        padding:20,
        margin:20,
        fontWeight : 'bold',
    },

    text2:{
        color: 'black',
        fontSize: 12,
        textAlign: 'center',
        padding:10,
        margin:10,
        textDecorationLine:'underline',
    },

    text3:{
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
    },

    text4:{
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        textDecorationLine:'underline',
        fontWeight: 'bold',
    },

    TextInput1: {
        borderWidth: 1,
        borderColor:'black',
        marginHorizontal: 10,
        borderRadius:10,
        margin:20,
        marginLeft:40,
        marginRight:40,
        height:40,
        paddingLeft:15,
    },

    btn: {
        
        marginLeft:40,
        marginRight:40,
        marginHorizontal: 10,
        margin:20,
        borderRadius:10,
    },

    TextInput2:{
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal:20,
        borderColor:'black',
        justifyContent:'space-between',
        height:40,
        paddingLeft:15,
    }
})
