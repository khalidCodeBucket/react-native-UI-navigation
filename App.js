import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import MyHeader from './components/MyHeader';
import SearchScreen from './components/SearchScreen';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

class App extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Home',
  }

  render() {

    return (
      <View style={styles.container}>
        <MyHeader name="Home" />
        <ImageBackground style={{width:"100%", height:"60%"}} resizeMode="stretch" source={require('./mycurve.png')}>
          <TextInput style={{borderRadius:30, margin:40, backgroundColor:'white', height:50}} />
        </ImageBackground>
  
        <View style={{flex:1, flexDirection:"row", marginTop:"-35%", justifyContent:"space-around"}}>
          <View>
  
            <Card style={styles.mycard}>
              <Card.Content>
                <Title>React Native</Title>
              </Card.Content>
            </Card>
            <Card style={styles.mycard}>
              <Card.Content>
                <Title>React Native</Title>
              </Card.Content>
            </Card>
            <Card style={styles.mycard}>
              <Card.Content>
                <Title>React Native</Title>
              </Card.Content>
            </Card>
  
          </View>
  
          <View>
              <Card style={styles.mycard}>
                <Card.Content>
                  <Title>React Native</Title>
                </Card.Content>
              </Card>
              <Card style={styles.mycard}>
                <Card.Content>
                  <Title>React Native</Title>
                </Card.Content>
              </Card>
              <Card style={styles.mycard}>
                <Card.Content>
                  <Title>React Native</Title>
                </Card.Content>
            </Card>
          </View>
  
        </View>
      </View>
    );
  }
}

const MyDrawer = createDrawerNavigator({
  search: SearchScreen,
  home: App
})

export default createAppContainer(MyDrawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', 
  },
  mycard: {
    marginBottom: 10,
    elevation: 4
  }
});
