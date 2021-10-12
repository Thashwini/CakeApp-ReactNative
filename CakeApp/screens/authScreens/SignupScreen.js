import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View, TextInput, Button, StatusBar } from 'react-native'
import Header from '../../components/Header';
import firebase from 'firebase';



const SignupScreen = ({navigation}) => {

    const [textInputFoccused, settextInputFoccused] = useState(false);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const [repassword, setrepassword] = useState('')
    const [errormessage, seterrormessage] = useState('')
    const [successmessage, setsuccessmessage] = useState('')

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    const textInput3 = useRef(3)

    const onsubmit = (email,password) => {

        const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!email && !password){
            alert('Please enter all the required fields')
        }
        else if(!reg.test(email)){
            alert('Invalid Email')
        }
        else if(password!=repassword){
            alert('Passwords matching faild')
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user=>{
                setsuccessmessage('User Registered Successfully')
                seterrormessage('')
                alert('success')
                navigation.navigate('DrawerNavigation')

            }).catch(err=>seterrormessage(err.message))
            // navigation.navigate('DrawerNavigation')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar 
            barStyle= 'light-content'
            backgroundColor = '#B9AB98'
            />
            <Header 
            title='SIGN UP'
            type="arrowleft"
            navigation={navigation}
            />

            <View style={{marginTop:40}}>

                <View>
                    <Text style={styles.text1}>SIGN UP</Text>
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
                        placeholder= 'Enter Password'
                        secureTextEntry={true}
                        ref={textInput2}
                        onChangeText={(text)=>setpassword(text)}

                        />
                    </View>
                    <View>
                        <TextInput
                        style={styles.TextInput1}
                        placeholder= 'Re-enter Password'
                        secureTextEntry={true}
                        ref={textInput3}
                        

                        />
                    </View>
                    <View style={styles.btn}>
                        <Button 
                        title='SIGN UP'
                        color= '#B9AB98'
                        marginLeft='40'
                        marginRight='40'
                        style={styles.btn}
                        onPress={()=>{
                            onsubmit(email,password,repassword)
                        }}
                        />

                    </View>
                </View>
                {!!errormessage && <Text>{errormessage}</Text>}
                {!!successmessage && <Text>{successmessage}</Text>}

                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text style={styles.text3}>Already Registered? </Text>
                    <Text style={styles.text4}
                    onPress={()=>{
                        navigation.navigate('SigninScreen')
                    }}
                    >SIGN IN</Text>
                </View>

            </View>
            
            
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container:{
        
    },

    text1:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        padding:10,
        margin:10,
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
