import { Col, Row, Grid } from "react-native-easy-grid";
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';
import StyleButton from './../../styles/StyleButton';
import stylesApp from './../../styles/App';

export default class CardImage extends Component {

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  constructor(props) {
    super(props);
    this.state = {
      data : props.data || ''
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      data : props.data || ''
    });
  }

  render() {
    return (
      <View style={styles.card} ref={component => this._root = component} {...this.props}>

        <Image style={styles.imageCircle} source={{uri: this.state.data.image}}/>

        <Button
          style={[StyleButton.Yellow, {marginTop:10}]}
          textStyle={stylesApp.buttonTextStyle}
          onPress={() => { }}>
          {this.state.data.name}
        </Button>
      </View>)
  }
}

var styles = StyleSheet.create({
  card:{
    padding:15,
    marginTop:5,
    marginBottom:5,
    height:220,
    backgroundColor:'#fff',
    borderRadius:5
  },
  imageCircle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});
