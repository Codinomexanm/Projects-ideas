import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{

  Header = () => {
    return(
    <View>
      <Text>titulos e afins</Text>
    </View>

    );
  }
  Body = () => {
    return(
    <View>
      <Text>corpo do site</Text>
    </View>

    );
  }
  Footer = () => {
    return(
    <View>
      <Text>rodapé</Text>
    </View>

    );
  }

  render(){
    return (
      <View style={{marginTop:100,marginLeft:50}}>
      <this.Header></this.Header>
      <this.Body></this.Body>
      <View>
        <Text>qulquer coisa</Text>
      </View>
      <this.Footer></this.Footer>

      </View>
    );

  }
}