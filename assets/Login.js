import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';
import {Button, Icon, Item, Input, Content, Container} from 'native-base';
import imgLogo from '../imgs/Logo.png';
import {Actions} from 'react-native-router-flux';

class Login extends Component {
  render() {
    return (
      <Container style={{backgroundColor: "white"}}>
        <Content>
          <Image source={imgLogo} style={styles.image}/>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{margin: 10}}>
            <Icon name="logo-facebook" style={{color: '#3B5998', fontSize: 40}} />
            </TouchableOpacity>

            <TouchableOpacity style={{margin: 10}}>
            <Icon name="logo-googleplus" style={{color: '#c71610', fontSize: 40}} />
            </TouchableOpacity>
          </View>

          <View style={{flex:3, paddingHorizontal: 20, justifyContent:'center'}}>
            <Item rounded style={{margin: 5, borderColor: '#f08080'}}>
              <Input placeholder='Correo electrónico' keyboardType= 'email-address' returnKeyType= 'next'/>
            </Item>
            <Item rounded style={{margin: 5, borderColor: '#f08080'}}>
              <Input placeholder='Contraseña'secureTextEntry={true} />
            </Item>
            <Button rounded info style={{margin: 5, alignSelf:'center', backgroundColor: '#f08080'}}
              onPress={()=>Actions.Inicio()}>
              <Text style={{color: 'white'}}>INGRESAR</Text>
            </Button>
          </View>

          <View style={{justifyContent: 'flex-end',
          flex: 1}}>
          <View style={{justifyContent: 'center',
          flexDirection: 'row', marginBottom: 10}}>
          <Text>¿Aún no tienes cuenta?, </Text>
          <Text style={{fontWeight:'bold'}} onPress={()=>Actions.Registro()}>REGISTRATE</Text>
          </View>
        </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  }
})

export default Login;
