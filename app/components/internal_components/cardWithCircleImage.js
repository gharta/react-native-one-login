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
    this.state = {};
  }

  componentWillReceiveProps(props) {
    this.setState({});
  }

  render() {
    return (
      <View style={styles.card} ref={component => this._root = component} {...this.props}>
        <Grid>
          <Col size={40}>
            <Image style={styles.imageCircle} source={{uri: 'http://placehold.it/100x100'}}/>
          </Col>

          <Col size={60}>
            <Text>Here</Text>
          </Col>
        </Grid>

        <Button
          style={[StyleButton.Yellow]}
          textStyle={stylesApp.buttonTextStyle}
          onPress={() => { }}>
          GO TO APP
        </Button>
      </View>)
  }
}

var styles = StyleSheet.create({
  card:{
    padding:15,
    marginTop:5,
    marginBottom:5,
    height:200,
    backgroundColor:'#fff',
    borderRadius:5
  },
  imageCircle: {
    height: 100,
    borderRadius: 50,
    width: 100
  }
});
