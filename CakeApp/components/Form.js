import React, {useState} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import FormLable from './FormLable'
import FormInput from './Forminput'
import FormButton from './FormButton'
import { useNavigation } from '@react-navigation/core'

const FormInputGroup = ({children}) => {
    return(
        <View>
            {children}
        </View>
    )
}

export default function Form({signup, onSubmit}) {
    const navigation = useNavigation(),
    screen = signup ? "Home" : "Register"
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    
    return (
        <View>
            <FormInputGroup>
                <FormLable text="Email"></FormLable>
                <FormInput onChangeText={(text)=>setemail(text)}></FormInput>
                
            </FormInputGroup>

            <FormInputGroup>
                <FormLable text="Password"></FormLable>
                <FormInput 
                secureTextEntry={true}
                onChangeText={(text)=>setpassword(text)}></FormInput>
                
            </FormInputGroup>

            <FormButton primary={true} text={!signup ? "Login" : "Register"} 
            onPress={()=>onSubmit(email,password)}/>

            <FormButton primary={false} 
            onPress={()=>navigation.navigate(screen)}
            text={signup ? "Login" : "Register"} />
        </View>
    )
}
