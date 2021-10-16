import React, {useState, useRef, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, Button, StatusBar } from 'react-native'
import {colors,parameters} from '../../global/styles';
import Header from '../../components/Header';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup'
import { login, subscribeToAuthChanges} from '../../api/CategoriesApi'


export default function SigninScreen({navigation}) {

    useEffect(() => {
        
        
    }, [])

    const onAuthStateChanged = (user) =>{
        if(user !== null){
            navigation.navigate('DrawerNavigation')
        }
        else if(user === null){
            alert('Invalid Signin')
        }
    }

    const review = yup.object({
        email: yup.string().required("Email is Required").email("Email is not valid"),
        password: yup.string().required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        
    
    })

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
                <Formik
                    initialValues={{email:'',password:''}}
                    validationSchema={review}
                    onSubmit={(values, actions)=>{
                        actions.resetForm()
                        console.log(values)
                        login(values)
                        subscribeToAuthChanges(onAuthStateChanged)
                    }}
                    >
                        {(props)=>(
                        <View>

                        <TextInput
                        style={styles.TextInput1}
                        onChangeText={props.handleChange('email')}
                        placeholder="Enter Email Address"
                        value={props.values.email}
                        onBlur={props.handleBlur('email')}
                        />
                        <Text style={{color:'red', textAlign:'center'}}><ErrorMessage name='email' /></Text>

                        <TextInput
                        style={styles.TextInput1}
                        secureTextEntry={true}
                        onChangeText={props.handleChange('password')}
                        placeholder="Enter Password"
                        value={props.values.password}
                        onBlur={props.handleBlur('password')}
                        />
                        <Text style={{color:'red', textAlign:'center'}}><ErrorMessage name='password' /></Text>

                        
                        <View style={styles.btn}>
                        <Button
                        color= '#B9AB98'
                        style={styles.btn}
                        onPress={()=>props.handleSubmit()} 
                        title='SIGN IN'
                        />
                        </View>
                        </View>
                        )}

                    </Formik>
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
