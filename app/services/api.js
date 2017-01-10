import {
  AsyncStorage
} from 'react-native';

class Http {

  async getprofile() {
    try {
      const value = await AsyncStorage.getItem('token');
      return value.replace(/"/g, '');
    } catch (error) {
      // Handle errors here
    }
  }

  getUrl() {
    return 'http://10.0.2.2:8080';
  }

  async login(username, password) {
    try {
      let response = await fetch(`${this.getUrl()}/authenticate/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username, password
        })
      })

      if (response.headers.map['x-auth-token'])
        return {
          token: response.headers.map['x-auth-token']
        };

      return {
        error: true
      }
    } catch(error) {
      return {error};
    }
  }

  async getExternal() {
    try {

      let token = await this.getprofile();

      let response = await fetch(`${this.getUrl()}/api/externalUsers/allExternalUsers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': token
        }
      })

      let responseJson = await response.json();
      return responseJson;

    } catch(error) {
      return {error};
    }
  }
}

export default new Http();
