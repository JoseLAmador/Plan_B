import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, Image, TextInput } from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Tab,
  Tabs,
  Picker,
  Item as FormItem,
  Fab
} from 'native-base';
const Item = Picker.Item;
import Cabecera2 from './Cabecera2';
import imgLogo from '../imgs/Ahorro.png';
import {Actions} from 'react-native-router-flux';

export default class NuevoAhorro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1",
      text: '$'
    };
  }
  onValueChange(value : string) {
    this.setState({selected1: value});
  }
  render() {
    return (
      <Container style={{backgroundColor: "white"}}>
        <Cabecera2/>
        <Content>
            <Image source={imgLogo} style={styles.img}/>
          <Title style={{
            top: 10,
            color: "black"
          }}>¿Cuanto quieres ahorrar?</Title>

          <Text style={styles.margen}>Ingresa la cantidad que deseas Ahorrar</Text>
          <TextInput keyboardType='numeric'
            style={styles.margen2} onChangeText={(text) => this.setState({text})} value={this.state.text}/>

          <Text style={styles.margen}>Nombre de su Ahorro</Text>
          <TextInput
            style={styles.margen2} onChangeText={(text) => this.setState({text})} value={this.state.text}/>

          <Text style={styles.margen}>Ingresa una imagen</Text>
          <Button style={styles.margen3}><Text>Selecciona tu Imagen</Text></Button>
        </Content>

          <Fab active={this.state.active} direction="up" containerStyle={{}} style={{
            backgroundColor: '#5067FF'
          }} position="bottomRight" onPress={() => Actions.Ahorros()}>
            <Icon name="add"/>
          </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    color: "green"
  },
  margen: {
    marginLeft: 10,
    top: 25
  },
  margen2: {
    marginLeft: 10,
    top: 25
  },
  margen3: {
    marginLeft: 10,
    top: 40
  },
  img: {
    height: 200,
    width: '100%',
    flex: 1
  }
});

module.export = NuevoAhorro;
