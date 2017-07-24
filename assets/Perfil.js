import React, { Component } from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { CheckBox,Button,Right,Thumbnail, H1, Body,Label, List, CardItem,Card, ListItem,Container, Content,Text, Item, Input, Icon } from 'native-base';

class Perfil extends  Component{
  render(){
    return(
      <Container style={{backgroundColor: "white"}}>
        <Content>
          <View style={{backgroundColor:'rgb(0,0,0)', opacity:0.6}} >
            <Image style={{justifyContent:'center',alignItems:'center', height:140,}} source={{uri: 'https://ae01.alicdn.com/kf/HTB1YU0LRVXXXXbUXXXXq6xXFXXXz/1PC-Personalise-Square-piggy-bank-Logbook-Series-font-b-Tin-b-font-Plate-box-font-b.jpg'}}/>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Thumbnail style={{  zIndex:1, position:'absolute', top:-60, borderColor:'white',borderWidth:2.5}}  square large source={{uri: 'http://pre02.deviantart.net/7f1b/th/pre/f/2014/060/6/c/vi_by_magicnaanavi-d75379v.jpg'}} />
          </View>
          <List>
            <ListItem itemDivider>
              <Text>Info</Text>
            </ListItem>
            <ListItem >
              <Input disabled placeholder='Vi'/>
              <Icon name='information-circle' />
            </ListItem>
            <ListItem>
              <Input disabled placeholder='Vi@leagueoflegends.com'/>
            </ListItem>
            <ListItem itemDivider>
              <Text>Datos de usuario</Text>
            </ListItem>
            <ListItem >
            <Item floatingLabel>
              <Label>Sexo</Label>
              <Input disabled value='Mujer'/>
            </Item>
            </ListItem>
            <ListItem>
              <Item floatingLabel>
                <Label>Edad</Label>
                <Input disabled value='25'/>
              </Item>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
export default Perfil;
