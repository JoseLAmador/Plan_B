import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Cabecera extends Component {
  render() {
    return (
        <Header style={{backgroundColor: "white"}}>
          <Left>
            <Title style={{color: 'black'}}>Plan_B</Title>
          </Left>
          <Right>
            <Button transparent>
              <Icon name='pin' style={{color: 'green'}}/>
            </Button>
            <Button transparent onPress={()=>Actions.Perfil()}>
              <Icon name='person' style={{color: 'green'}}/>
            </Button>
            <Button transparent onPress={()=>Actions.Login()}>
              <Icon name='menu' style={{color: 'green'}}/>
            </Button>
          </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white"
  },
  color: {
    color: "green"
  },
});

module.export = Cabecera;
