import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Button, Icon, Item, Input} from 'native-base';
import imgLogo from '../imgs/planb1.jpg';
import {Actions} from 'react-native-router-flux';

class Registro extends Component{
  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', marginBottom: 10}}>
          <Image source={imgLogo} style={{width: '100%', height: '100%'}} />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>REGISTRO</Text>

        </View>
        <View style={{flex: 1, marginTop: 20, paddingHorizontal: 20}}>

      <Item rounded style={{margin: 5, borderColor: '#f08080'}}>
        <Input placeholder='Nombre' returnKeyType= 'next'/>
      </Item>

      <Item rounded style={{margin: 5, borderColor: '#f08080'}}>
        <Input placeholder='Correo electrónico' keyboardType= 'email-address' returnKeyType= 'next'/>
      </Item>

      <Item rounded style={{margin: 5, borderColor: '#f08080'}}>
        <Input placeholder='Contraseña' secureTextEntry={true} />
      </Item>

      <Button rounded info style={{margin: 5, alignSelf:'center', backgroundColor: '#f08080'}}>
        <Text style={{color: 'white'}}>CREAR CUENTA</Text>
      </Button>
      </View>
      <Text style={{marginBottom: 10, alignSelf:'center'}} onPress={()=>Actions.Logg()}>¿Ya tienes cuenta?, INGRESA</Text>
      </View>
    );
  }
}
export default Registro;
