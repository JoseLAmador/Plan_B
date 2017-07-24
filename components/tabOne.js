import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Icon,
  Button
} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class tabOne extends Component {
  render() {
    return (
      <Container style={{backgroundColor: "white"}}>
        <Content>
          <Card style={{
            alignItems: 'center',
            height: 250,
          }}>
            <CardItem header>
              <Text>Ser mas ahorrativo</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text></Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.color}>0%</Text>
            </CardItem>
          </Card>

          <Card style={{
            alignItems: 'center',
            height: 200,
          }}>
            <CardItem header>
              <Icon active name="chatbubbles"/>
              <Text style={styles.texto}>Dinero</Text>
            </CardItem>
            <CardItem style={{
              alignItems: 'center'
            }}>
              <Text>
                Es hora de ahorrar
              </Text>
            </CardItem>
            <CardItem footer>
              <Text>0 ----- 6 ----- 12 ----- 16 ----- 18 ----- 24</Text>
            </CardItem>
          </Card>

          <View style={styles.align}>
            <Button iconLeft transparent onPress={()=>Actions.Ingresos()}>
              <Icon name='cash' />
                <Text>Ingresos</Text>
            </Button>
            <Button iconLeft transparent onPress={()=>Actions.Gastos()}>
              <Icon name='alert'/>
                <Text>Gastos</Text>
            </Button>
            <Button iconLeft transparent onPress={()=>Actions.Ahorros()}>
              <Icon name='beaker' />
                <Text>Ahorros</Text>
            </Button>
          </View>

        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  texto: {
    color: "green",
    fontSize: 12
  },
  color: {
    color: "green"
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  align: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
  }
});

module.export = tabOne;
