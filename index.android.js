/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import RTWebView from './app/components/Webview';
import Login from './app/components/Login';

export default class realtimeLogin extends Component {
  render() {
    return (
        <Login />
    );
  }
}

AppRegistry.registerComponent('realtimeLogin', () => realtimeLogin);
