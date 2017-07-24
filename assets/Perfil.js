import React, { Component } from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { Header,CheckBox,Button,Form, Right,Thumbnail, H1, Body,Label, Left, List, CardItem,Card, ListItem,Container, Content,Text, Item, Input, Icon } from 'native-base';
import ActionSheet from 'react-native-actionsheet'

const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 4
const options = [ 'Cancel', 'Femenino', 'Masculino']
const title = '¿Cual es tu sexo?'

class Perfil extends  Component{

  constructor(props) {
    super(props)
    this.state = {
      selected: ''
    }
    this.handlePress = this.handlePress.bind(this)
    this.showActionSheet = this.showActionSheet.bind(this)
  }

  showActionSheet() {
    this.ActionSheet.show()
  }

  handlePress(i) {
    this.setState({
      selected: i
    })
  }

  render(){

    return(
      <Container>
      <Header/>

      <Content>
      <View style={{backgroundColor:'rgb(0,0,0)', opacity:0.6}} >
        <Image style={{justifyContent:'center',alignItems:'center', height:180,}} source={{uri: 'https://ae01.alicdn.com/kf/HTB1YU0LRVXXXXbUXXXXq6xXFXXXz/1PC-Personalise-Square-piggy-bank-Logbook-Series-font-b-Tin-b-font-Plate-box-font-b.jpg'}}/>
      </View>
        <View style={{justifyContent:'center',alignItems:'center'}}   >
          <Thumbnail style={{  zIndex:1, position:'absolute', top:-60, borderColor:'white',borderWidth:2.5}}  square large source={{uri:'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'}} />

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

           <Form>
           <Item floatingLabel onPress={this.showActionSheet}>
              <Label>Sexo</Label>
              <Input disabled value={options[this.state.selected]} />
            </Item>
            <Item floatingLabel last>
              <Label>Edad</Label>
              <Input keyboardType='numeric' />
            </Item>
         </Form>
         <ListItem itemDivider>
           <Text>Cuentas</Text>
         </ListItem>

       </List>
       <ActionSheet
          ref={o => this.ActionSheet = o}
          title={title}
          options={options}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
          onPress={this.handlePress}
        />
      </Content>

      </Container>
    );
  }

}
export default Perfil;
