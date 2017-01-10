/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import { AppRegistry, BackAndroid, AsyncStorage, Image} from 'react-native';
 import { Scene, Router, Reducer, Actions, ActionConst } from 'react-native-router-flux';
 import LoginPage from './app/components/Login';
 import ListsExternalPage from './app/components/ListsExternalPage';
 import WebViewPage from './app/components/Webview';
 import styles from './app/styles/App';

 export default class realtimeLogin extends React.Component {
   constructor () {
     super()

     this.state = {
       isDefaultHome: false,
       isDefaultLogin: false,
       isGetFromStorage:false
     }

     this.preInitialize().done();
   }

   componentWillMount() {
   };

   async preInitialize() {

    const profileJSON = await AsyncStorage.getItem('token');
    const profile = JSON.parse(profileJSON);

    if (profile != null) {
      this.setState({
        isDefaultHome: true
      });
    }else {
      this.setState({
        isDefaultLogin: true
      });
    }

    this.setState({isGetFromStorage:true})

    return true;
  }

   render() {

    if (!this.state.isGetFromStorage) {
      return <Image source={ require('./background.jpg') } style={styles.container}></Image>;
    }

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
          <Scene key="ListsExternalPage" initial={this.state.isDefaultHome} type={ActionConst.REPLACE} hideNavBar={true} component={ListsExternalPage} />
          <Scene key="LoginPage" initial={this.state.isDefaultLogin} type={ActionConst.REPLACE} hideNavBar={true} component={LoginPage} />
          <Scene key="WebViewPage" hideNavBar={true} component={WebViewPage} />
        </Scene>
      </Router>
     );

   }
 }

AppRegistry.registerComponent('realtimeLogin', () => realtimeLogin);
