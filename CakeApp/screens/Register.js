import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Title from "../components/Title"
import Form from '../components/Form';
import Layout from './Layout';
import firebase from 'firebase';

export default function Home() {

    const [errorMessage,seterror] = useState(""),
    [successMessage,setsuccess] = useState("")
    const register = (email,password) => {
        if(!email && ! password){
            alert("enterrrrr")
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user=>{
            setsuccess('user registered')
            seterror('')

        }).catch(err=>seterror(err.message))

        }

        

    }
    return ( 
        <Layout>
      <Title text="Register"/>
      <Text>{errorMessage}</Text>
      <Text>{successMessage}</Text>
      <Form signup={true} onSubmit={register}></Form>
    </Layout>
    )
}

