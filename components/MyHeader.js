import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function MyHeader(props) {
  
    return (
      <Appbar.Header style={{backgroundColor:'white'}}>
        <Ionicons name="md-menu" size={34} color="#F86262" style={{marginLeft:10}} />
        <Text style={{color:"#F86262", marginLeft:22, fontSize:25}}>{props.name}</Text>
      </Appbar.Header>
    );
}