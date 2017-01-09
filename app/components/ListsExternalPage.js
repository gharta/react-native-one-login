import React, {Component} from 'react';
import {
  View,
  Alert,
  Image,
  ScrollView,
  Keyboard
} from 'react-native';
import service from './../services/api';
import { Actions } from 'react-native-router-flux';
import CardImage from './internal_components/cardWithImage';
import RTLoader from './internal_components/loader';
import styles from './../styles/App';

export default class ListsExternalPage extends Component {
  constructor(props) {
    super(props);
    Keyboard.dismiss();
    this.state = {
      externalUsers:null
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
      const externalSystem = this.state.externalUsers[i].externalSystem;
      list.push(<CardImage key={i} data={externalSystem} />)
    }

    return list
  }

  render () {

    if (!this.state.externalUsers) {
      return (<Image source={ require('./../../background.jpg') } style={styles.containerContent}>
                <RTLoader />
              </Image>);
    }

    return (
    <Image source={ require('./../../background.jpg') } style={styles.containerContent}>
      <ScrollView>
        {
          this.renderCards()
        }
      </ScrollView>
    </Image>
    )
  }
}
