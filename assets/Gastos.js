import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput } from 'react-native';
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
  Form,
  Item as FormItem,
  Fab
} from 'native-base';
const Item = Picker.Item;

export default class Gastos extends Component {
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
      <Container>
        <Content>
          <Image source={{
            uri: 'https://www.clubfinanzas.com/wp-content/uploads/2016/01/como-reducir-gastos.jpg'
          }} style={{
            height: 200,
            width: '100%'
          }}/>
          <Title style={{
            top: 10
          }}>Gastos</Title>
          <View style={styles.align}>
            <TextInput style={{
              height: 40,
              width: 200,
              marginLeft: 10,
              top: 30
            }} onChangeText={(text) => this.setState({text})} value={this.state.text}/>
            <Form>
              <Picker iosHeader="Select one" mode="dropdown" selectedValue={this.state.selected1} onValueChange={this.onValueChange.bind(this)} style={{
                top: 26
              }}>
                <Item label="Alimentos" value="key0"/>
                <Item label="Renta" value="key1"/>
                <Item label="Trasporte" value="key2"/>
                <Item label="Escuela" value="key3"/>
                <Item label="Casa" value="key4"/>
              </Picker>
            </Form>
          </View>
        </Content>
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    color: "green"
  },
  align: {
    flexDirection: 'row'
  }
});

module.export = Gastos;