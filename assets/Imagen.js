
import React from 'react';
import {
  AppRegistry,
  StyleSheet,

  View,
  PixelRatio,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header,CheckBox,Button,Form, Right,Thumbnail, H1, Body,Label, Left, List, CardItem,Card, ListItem,Container, Content,Text, Item, Input, Icon } from 'native-base';


import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {

  state = {
    avatarSource: null,
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,

      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }




  render() {
    return (

      <View style={{justifyContent:'center',alignItems:'center'}}   >

        { this.state.avatarSource === null ? <Thumbnail style={{  zIndex:1, position:'absolute', top:-60, borderColor:'white',borderWidth:2.5}}  square large source={require('../imgs/user.png')} /> :
          <Thumbnail style={{  zIndex:1, position:'absolute', top:-60, borderColor:'white',borderWidth:2.5}}  square large source={this.state.avatarSource}/>

        }
        <View style={{  zIndex:2, left:35, backgroundColor:'white', height:35, borderRadius:15, width:35, justifyContent:'center', alignItems:'center'}}>
        <Icon   onPress={this.selectPhotoTapped.bind(this)}  name='camera'/>
        </View>
      </View>



    );
  }

}
