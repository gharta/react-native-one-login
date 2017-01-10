import React, {Component} from 'react';
import {
  View,
  Alert,
  Image,
  ScrollView,
  Keyboard,
  AsyncStorage
} from 'react-native';
import service from './../services/api';
import { Actions } from 'react-native-router-flux';
import CardImage from './internal_components/cardWithImage';
import RTLoader from './internal_components/loader';
import styles from './../styles/App';
import Button from 'apsl-react-native-button';
import StyleButton from './../styles/StyleButton';

export default class ListsExternalPage extends Component {
  constructor(props) {
    super(props);
    Keyboard.dismiss();
    this.state = {
      externalUsers: null,
      isLoadingLogout: false
    };
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

  componentWillMount() {
    this.getExternalUsers().done();
  }

  async getExternalUsers() {
    const externalUsers = await service.getExternal();
    this.setState({
      externalUsers
    });
    return true;
  }

  renderCards() {
    var list = [];

    for (var i = 0; i < this.state.externalUsers.length ; i++) {
      let externalSystem = this.state.externalUsers[i].externalSystem;
      const externalUser = this.state.externalUsers[i];

      externalSystem.username = externalUser.username;
      externalSystem.password = externalUser.password;

      list.push(<CardImage key={i} data={externalSystem} button={() => {
        Actions.WebViewPage(externalSystem)
      }} />)
    }

    return list
  }

  async removeStorage() {
    return await AsyncStorage.removeItem('token');
  }

  render () {

    if (!this.state.externalUsers) {
      return (<Image source={ require('./../../background.jpg') } style={styles.containerContent}>
                <RTLoader />
              </Image>);
    }

    return (
    <Image source={ require('./../../background.jpg') } style={styles.containerContent}>

      <Button
        style={StyleButton.Red}
        isLoading={this.state.isLoadingLogout}
        textStyle={styles.buttonTextStyle}
        onPress={() => {
         this.setState({isLoadingLogout:true})
         this.removeStorage().then((res) => {
           this.setState({isLoadingLogout:false})
           Actions.LoginPage();
         }).catch(() => {
           this.setState({isLoadingLogout:false})
           Actions.LoginPage();
         })
        }}>
        LOGOUT
      </Button>

      <ScrollView>
        {
          this.renderCards()
        }
      </ScrollView>
    </Image>
    )
  }
}
