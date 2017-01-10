import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class RTWebView extends Component {
  constructor(props) {
    super(props);

    console.log(props)
    this.state = {
      loginUrl:props.loginPageUrl,
      objectIdentifier: {
        username: props.username,
        password: props.password,
        usernameIdentifier: props.mobileUsername || '',
        passwordIdentifier: props.mobilePassword || '',
        submitIdentifier: props.mobileSubmit || ''
      }
    };
  }

  setValueToElement(query, value) {
    query = query.split("=")

    if (query.length != 2)
      return false;

    var attr = query[0];
    var identifier = query[1];

    var returnScript = '';

    if (attr == "id") {

      return `document.getElementById('${identifier}').value = '${value}';`;

    } else if (attr == "class") {

      return `document.getElementsByClassName('${identifier}')[0].value = '${value}';`;

    } else if (attr == "name") {

      return `document.getElementsByName('${identifier}')[0].value = '${value}';`;
    }
  }

  submitLogin(query) {
    query = query.split("=")

    if (query.length == 2) {
      var attr = query[0];
      var identifier = query[1];

      if (attr == "id"){

        return `document.getElementById('${identifier}').click();`;
      } else if (attr == "class") {

        return `document.getElementsByClassName('${identifier}')[0].click();`;
      } else {

        return `document.forms[0].submit();`;
      }
    }
  }

  buildReturnScript(objectIdentifier) {
    let script = '';

    script += this.setValueToElement(objectIdentifier.usernameIdentifier, objectIdentifier.username);
    script += this.setValueToElement(objectIdentifier.passwordIdentifier, objectIdentifier.password);
    script += this.submitLogin(objectIdentifier.submitIdentifier);

    return script;
  }

  getInJectedScript(objectIdentifier) {
    return this.buildReturnScript(objectIdentifier);
  }

  render() {
    return (
      <WebView
        source={{uri: this.state.loginUrl}}
        injectedJavaScript={this.getInJectedScript(this.state.objectIdentifier)}
        javaScriptEnabledAndroid={true}
        scalesPageToFit={true}
      />
    );
  }
}
