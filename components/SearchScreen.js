import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
import MyHeader from './MyHeader';
import Mycard from './Mycard';

export default class SearchScreen extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Search',
    }
  
    render() {
        return (
            <View>
                <MyHeader name="Search" />
                <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:10}}>
                    <Button style={{backgroundColor:'#17aa30'}}>
                        <Text style={{color:'white'}}>abc</Text>
                    </Button>
                    <Button style={{backgroundColor:'white',borderColor:'#17aa30',borderWidth:1}}>
                        <Text style={{color:'#17aa30'}}>def</Text>
                    </Button>
                </View>
                <Mycard /> 
                <Mycard /> 
                <Mycard /> 
            </View>
        );
    }
}