import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './componentes/Header.js';
import Body from './componentes/Body.js';


export default class App extends React.Component{
    render(){
      return(
          <ScrollView style={{marginTop:20,flex:1}}>
            <Header></Header>
            <Body></Body>
          </ScrollView>
        );
    }
}





