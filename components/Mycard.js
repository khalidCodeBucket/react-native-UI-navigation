import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function Mycard() {
  
    return (
        <View style={{margin:10}}>
            <Card style={{elevation:5}}>
                <View style={{flexDirection:"row", padding:10}}>
                    <View style={{height:80,width:80,borderRadius:40,backgroundColor:"#F86262"}} />
                    <View>
                        <Card.Content>
                            <Title>John Doe</Title>
                            <Paragraph style={{color:'green'}}>abcd</Paragraph>
                            <Paragraph>abcd</Paragraph>
                        </Card.Content>
                    </View>
                    <View>
                        <Card.Content>
                            <Paragraph>available date</Paragraph>
                                <View style={{flexDirection:'row'}}>
                                    <Ionicons name="md-calendar" size={20} color="green" />
                                    <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>20/03/2020</Text>
                                </View>
                        </Card.Content>
                    </View>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-around', padding:10}}>
                    <Button mode="contained" style={{backgroundColor:'#F86262',borderRadius:40}}>
                        VIEW PROFILE
                    </Button>
                    <Button mode="contained" style={{backgroundColor:'#F86262',borderRadius:40}}>
                        BOOKMARK
                    </Button>
                </View>

            </Card>
        </View>
    );
    
}