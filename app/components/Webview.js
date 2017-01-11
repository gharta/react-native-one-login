import React, { Component } from 'react';
import { WebView , View } from 'react-native';
import Button from 'apsl-react-native-button';
import StyleButton from './../styles/StyleButton';
import styles from './../styles/App';
const WEBVIEW_REF = "WEBVIEW_REF";

export default class RTWebView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginUrl:props.loginPageUrl,
      objectIdentifier: {
        username: props.username,
        password: props.password,
        usernameIdentifier: props.mobileUsername || '',
        passwordIdentifier: props.mobilePassword || '',
        submitIdentifier: props.mobileSubmit || ''
      },
      canGoBack: false
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

  onBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  render() {
    return (
      <View style={{ flex: 1, height:null }}>
        <WebView
          source={{uri: this.state.loginUrl}}
          injectedJavaScript={this.getInJectedScript(this.state.objectIdentifier)}
          javaScriptEnabledAndroid={true}
          scalesPageToFit={true}
          ref={WEBVIEW_REF}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        />

        <Button
          style={[StyleButton.Yellow, {marginLeft:100, marginRight:100}]}
          isLoading={this.state.isLoadingLogout}
          textStyle={styles.buttonTextStyle}
          onPress={this.onBack.bind(this)}
          isDisabled={!this.state.canGoBack}>
          BACK
        </Button>

      </View>
    );
  }
}
