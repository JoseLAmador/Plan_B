import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Header,CheckBox,Button, Body,List, CardItem,Card, ListItem,Container, Content,Text, Item, Input, Icon  } from 'native-base';

class Terminos extends Component{
  constructor(props) {
    super(props);

    this.state = {
        selected: false,
        check1:false,
        check2:false,
        check3:false,

    };
  }
  chec1() {
   this.setState({ check1: !this.state.check1});
   const newestado =this.state.check1 = false;
   this.setState({
     selected: newestado
   });
 }
 chec2() {
  this.setState({ check2: !this.state.check2});
  const newestado =this.state.selected = false;
  this.setState({
    selected: newestado
  });
}
chec3() {
 this.setState({ check3: !this.state.check3});
 const newestado =this.state.selected = false;
 this.setState({
   selected: newestado
 });
}

  toggle() {
       this.setState({selected: !this.state.selected});
       this.setState({check1: !this.state.check1});
       this.setState({check2: !this.state.check2});
       this.setState({check3: !this.state.check3});


  }


  render(){
    return(
      <Container>
        <Header/>
        <Content>
        <Card>

          <CardItem header>
              <Text style={{fontWeight: 'bold'}}>Términos y condiciones</Text>
          </CardItem>
          <CardItem>
          <Body>
          <List style={{ borderBottomWidth:2,borderBottomColor:'black'}}>
            <Text>Pulse los vínculos a continuación y léalos atentamente.
          Al marcar las casillas, usted reconoce que ha leído y que acepta
          los siguientes términos:</Text>

          <ListItem style={{ borderBottomWidth:2,borderBottomColor:'white'}} >
           <CheckBox checked={this.state.selected} onPress={this.toggle.bind(this)} />
           <View style={{left:15,}}>
           <Text>Acepto todo</Text>
           </View>

          </ListItem>
          </List>

          <ListItem style={{ borderBottomWidth:2,borderBottomColor:'white'}} >
          <CheckBox checked={this.state.check1} onPress={this.chec1.bind(this)}/>
            <View style={{left:10,}}>
            <Text>He leído y estoy de acuerdo con los Términos y condiciones y los Términos especiales</Text>
            </View>
          </ListItem>

          <ListItem style={{ borderBottomWidth:2,borderBottomColor:'white'}}>
          <CheckBox checked={this.state.check2}  onPress={this.chec2.bind(this)}/>
          <View style={{left:10,}}>
            <Text>He leído y estoy de acuerdo con las políticas de privacidad.</Text>
          </View>
          </ListItem>
          <ListItem style={{ borderBottomWidth:2,borderBottomColor:'white'}}>
          <CheckBox checked={this.state.check3} onPress={this.chec3.bind(this)}/>
          <View style={{left:10,}}>
           <Text>Activar servicios interactivos</Text>
          </View>
          </ListItem>


          <Button block >
          <Text>Acepto</Text>
          </Button>
          <Button block style={{backgroundColor:'gray', top:6}}>
          <Text>No acepto</Text>
          </Button>
          </Body>

          </CardItem>
        </Card>
        </Content>


      </Container>
    );
  }
}
const styles=StyleSheet.create({
  check:{
    justifyContent:'space-between',
  }
})
export default Terminos;
