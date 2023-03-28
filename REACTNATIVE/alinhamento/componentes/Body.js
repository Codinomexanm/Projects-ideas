import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

const Body = () => {

        return (
            <View>
            <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',padding:30}}>
                <Image
        style={{width:90,height:90}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
      />
                <Text style={{width:'70%',paddingLeft:20,paddingRight:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien lacus, elementum vel lacus at, molestie mollis mauris. Pellentesque suscipit tincidunt quam quis gravida. Praesent id leo odio. Mauris sed nunc ligula. Donec id pulvinar mauris. Integer consectetur aliquet ante et finibus. Suspendisse at purus sit amet augue sodales congue et egestas diam. Nullam vitae leo efficitur, luctus quam ut, volutpat leo. Donec at nunc in ex maximus rhoncus ac porta orci. Pellentesque pulvinar, ligula vel vestibulum lacinia, tortor felis auctor dui, at aliquam metus sapien in neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis dignissim nisl eu tortor rhoncus, non fringilla leo aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien lacus, elementum vel lacus at, molestie mollis mauris. Pellentesque suscipit tincidunt quam quis gravida. Praesent id leo odio. Mauris sed nunc ligula. Donec id pulvinar mauris. Integer consectetur aliquet ante et finibus. Suspendisse at purus sit amet augue sodales congue et egestas diam. Nullam vitae leo efficitur, luctus quam ut, volutpat leo. Donec at nunc in ex maximus rhoncus ac porta orci. Pellentesque pulvinar, ligula vel vestibulum lacinia, tortor felis auctor dui, at aliquam metus sapien in neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis dignissim nisl eu tortor rhoncus, non fringilla leo aliquet</Text>
                
            </View>

            <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',padding:30,justifyContent:'center'}}>
            <Image
            style={{width:90,height:90}}
            source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
            }}
            />
            <Text style={{width:'100%',paddingLeft:20,paddingRight:20,paddingTop:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien lacus, elementum vel lacus at, molestie mollis mauris. Pellentesque suscipit tincidunt quam quis gravida. Praesent id leo odio. Mauris sed nunc ligula. Donec id pulvinar mauris. Integer consectetur aliquet ante et finibus. Suspendisse at purus sit amet augue sodales congue et egestas diam. Nullam vitae leo efficitur, luctus quam ut, volutpat leo. Donec at nunc in ex maximus rhoncus ac porta orci. Pellentesque pulvinar, ligula vel vestibulum lacinia, tortor felis auctor dui, at aliquam metus sapien in neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis dignissim nisl eu tortor rhoncus, non fringilla leo aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien lacus, elementum vel lacus at, molestie mollis mauris. Pellentesque suscipit tincidunt quam quis gravida. Praesent id leo odio. Mauris sed nunc ligula. Donec id pulvinar mauris. Integer consectetur aliquet ante et finibus. Suspendisse at purus sit amet augue sodales congue et egestas diam. Nullam vitae leo efficitur, luctus quam ut, volutpat leo. Donec at nunc in ex maximus rhoncus ac porta orci. Pellentesque pulvinar, ligula vel vestibulum lacinia, tortor felis auctor dui, at aliquam metus sapien in neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis dignissim nisl eu tortor rhoncus, non fringilla leo aliquet</Text>

            </View>

            </View>
        );
}

export default Body;