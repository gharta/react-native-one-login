import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:null,
    height:null
  },
  containerContent: {
    flex: 1,
    padding:15,
    width:null,
    height:null
  },
  containerContentWithoutPadding: {
    flex: 1,
    width:null,
    height:null
  },
  laoder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    width:30,
    height:30
  },
  panel: {
    alignSelf: 'stretch',
    marginTop: 25,
    marginBottom: 15,
  },
  panelBody: {
    padding:15
  },

  panelBodyHomeScreen: {
    margin:5,
    borderRadius:10,
    padding:5
  },

  appNavbar: {
    backgroundColor: '#e98b39',
    borderBottomColor:'#e98b39'
  },

  modalTransparent: {
    backgroundColor:'rgba(230,230,230,0.8)'
  },
  textStyle: {
    color: 'white'
  },
  textColor: {
    color: '#eff0f1',
    borderColor: 'transparent'
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13
  },
  textHeading1: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    fontSize:25
  },
  textHeading2: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
    fontSize:20
  },
  textNormal: {
    color: 'white',
    fontWeight: '400',
    fontSize:12
  },
  textHeading6: {
    color: 'white',
    textAlign: 'center',
    fontSize:10
  },
  textStyle6: {
    color: '#8e44ad',
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  scrollView: {
    height: 350,
  }
})

export default styles;
