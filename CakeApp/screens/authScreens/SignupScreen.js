import React, {useState, useRef, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Button, StatusBar } from 'react-native'
import Header from '../../components/Header';
import firebase from 'firebase';
import { Formik, ErrorMessage } from 'formik';
import { signup, subscribeToAuthChanges} from '../../api/CategoriesApi'
import * as yup from 'yup'

const SignupScreen = ({navigation}) => {

    // useEffect(() => {
        
        
    // }, [])

    const onAuthStateChanged = (user) =>{
        if(user !== null){
            navigation.navigate('DrawerNavigation')
        }
    }

    const review = yup.object({
        displayName: yup.string().required("Name is required"),
        email: yup.string().required("Email is Required").email("Email is not valid"),
        password: yup.string().required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        confirmpassword: yup.string().required('Confirm Password is required').test('passwords-match', 'Passwords must match', function (value) { return this.parent.password === value })  
    })

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
                    <Formik
                    initialValues={{email:'',password:'',displayName:'',confirmpassword:''}}
                    validationSchema={review}
                    onSubmit={(values, actions)=>{
                        actions.resetForm()
                        console.log(values)
                        signup(values)
                        subscribeToAuthChanges(onAuthStateChanged)
                    }}
                    >
                        {(props)=>(
                        <View>
                        <TextInput 
                        style={styles.TextInput1}
                        onChangeText={props.handleChange('displayName')}
                        placeholder="Enter Name"
                        value={props.values.displayName}
                        onBlur={props.handleBlur('displayName')}
                        />
                        <Text style={{color:'red', textAlign:'center'}}><ErrorMessage name='displayName' /></Text>

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

                        <TextInput
                        style={styles.TextInput1}
                        secureTextEntry={true}
                        onChangeText={props.handleChange('confirmpassword')}
                        placeholder="Re-Enter Password "
                        value={props.values.confirmpassword}
                        onBlur={props.handleBlur('confirmpassword')}
                        />
                        <Text style={{color:'red', textAlign:'center'}}><ErrorMessage name='confirmpassword' /></Text>
                        <View style={styles.btn}>

                        <Button
                        color= '#B9AB98'
                        onPress={()=>props.handleSubmit()} 
                        title='SIGN UP'
                        />
                        </View>
                        </View>
                        )}
                    </Formik>
                </View>
                
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
        margin:2,
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
