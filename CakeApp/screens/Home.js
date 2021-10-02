import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Title from "../components/Title"
import Form from '../components/Form';
import Layout from './Layout';

export default function Home() {
  const login = (email,password) => {
    alert(email)

  }
    return (
        <Layout>
      <Title text="Login"/>
      <Form signup={false} onSubmit={login}></Form>
    </Layout>
    )
}

