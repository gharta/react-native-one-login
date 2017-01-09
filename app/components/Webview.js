import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class RTWebView extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://tiket.com'}}
        injectedJavaScript='alert("hi from realtime")'
        scalesPageToFit={true}
      />
    );
  }
}
