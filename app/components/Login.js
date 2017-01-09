import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Image,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';
import Button from 'apsl-react-native-button';
import styles from './../styles/App';
import StyleButton from './../styles/StyleButton';
import service from './../services/api';
import { Actions } from 'react-native-router-flux';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:'',
      password:'',
      isLoadingLogin:false
    };
  }

  async login() {
    return await service.login(this.state.user, this.state.password)
      .then((response) => {
        return response;
      });
  }

  async setStorage(result) {
    return await AsyncStorage.setItem('token', result);
  }

  showAlert(info) {
    Alert.alert(
      'Informasi',
      info,
      [
        {text: 'OK', onPress: () => {}},
      ]
    )
  }

  render () {
    return (
    <Image source={ require('./../../background.jpg') } style={styles.containerContent}>
      <View style={[styles.panelBodyHomeScreen]}>
          <Text style={styles.textHeading1}>
            myrealtime
          </Text>
          <Text style={styles.textHeading6}>

          </Text>

         <Text style={[styles.textColor, {marginTop:80}]}>Email</Text>

         <TextInput
           style={[{height: 40, borderWidth: 1},styles.textColor]}
           value={this.state.user}
           underlineColorAndroid='#eff0f1'
           onChangeText={user => this.setState({user})}
         />

         <Text style={styles.textColor}>Password</Text>

         <TextInput
           style={[{height: 40, borderWidth: 1}, styles.textColor]}
           value={this.state.password}
           secureTextEntry={true}
            underlineColorAndroid='#eff0f1'
           onChangeText={password => this.setState({password})}
         />

         <Button
           style={StyleButton.Yellow}
           isLoading={this.state.isLoadingLogin}
           textStyle={styles.buttonTextStyle}
           onPress={() => {
            this.setState({isLoadingLogin:true})
            this.login().then((result) => {

              if (!result.error) {
                if (result.token != null) {
                  this.setStorage(JSON.stringify(result.token[0])).then((stored) => {
                    // Actions.homePage();
                  }).catch((e) => {})

                }else {
                  this.showAlert("Wrong username and password")

                }
              }else {
                  this.showAlert("Wrong user name and password");
              }

              this.setState({isLoadingLogin:false})
            }).catch((e) => {
              this.setState({isLoadingLogin:false})
            })
           }}>
           LOGIN
         </Button>

      </View>
    </Image>
    )
  }
}
