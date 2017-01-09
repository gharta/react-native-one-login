import React, {Component} from 'react';
import {
  View
} from 'react-native';
import {Pulse} from 'react-native-loader';

export default class RTLoader extends Component {

  render() {
    return (
      <View style={
        {
          padding:15,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Pulse size={90} color="#fff" />
      </View>
    )
  }
}
