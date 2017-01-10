/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import { AppRegistry, BackAndroid, AsyncStorage, Image} from 'react-native';
 import { Scene, Router, Reducer, Actions, ActionConst } from 'react-native-router-flux';
 import LoginPage from './app/components/Login';
 import ListsExternalPage from './app/components/ListsExternalPage';
 import WebViewPage from './app/components/Webview';

 export default class realtimeLogin extends React.Component {
   constructor () {
     super()

     this.state = {}
   }

   componentWillMount() {
   };

   render() {
     return (
      <Router createReducer={(params)=>{
         const defaultReducer = Reducer(params);
         return (state, action)=>{
             if (action.key) {
               this.setState({
                 currentPage:action.key
               })
             }
             return defaultReducer(state, action);
         }
       }}>
        <Scene key="root">
          <Scene key="LoginPage" initial={true} hideNavBar={true} component={LoginPage} />
          <Scene key="ListsExternalPage" hideNavBar={true} component={ListsExternalPage} />
          <Scene key="WebViewPage" hideNavBar={true} component={WebViewPage} />
        </Scene>
      </Router>
     );

   }
 }

AppRegistry.registerComponent('realtimeLogin', () => realtimeLogin);
