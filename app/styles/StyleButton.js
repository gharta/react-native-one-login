import { StyleSheet } from 'react-native';

let borderRadius = 2;
const StyleButton = StyleSheet.create({
  Pressing: {
    borderColor: 'red',
    backgroundColor: 'red'
  },
  Yellow: {
    borderColor: '#F3C612',
    backgroundColor: '#f1c40f',
    borderRadius: borderRadius
  },
  Orange: {
    borderColor: '#e98b39',
    backgroundColor: '#e98b39',
    borderRadius: borderRadius
  },
  Red: {
    borderColor: '#c0392b',
    backgroundColor: '#c0392b',
    borderRadius: borderRadius
  },
  Cyan: {
    borderColor: '#16a085',
    backgroundColor: '#1abc9c',
    borderRadius: borderRadius
  },
  Green: {
    borderColor: '#34a853',
    backgroundColor: '#34a853',
    borderRadius: borderRadius
  },
  GreenTransparent: {
    borderColor: '#34a853',
    backgroundColor: 'rgba(230,230,230,0.1)',
    borderRadius: 0,
    borderWidth: 0
  },
  Blue: {
    borderColor: '#0f99ef',
    backgroundColor: '#0f99ef',
    borderRadius: borderRadius
  },
  Purple: {
    borderColor: '#8e44ad',
    backgroundColor: '#9b59b6',
    borderRadius: borderRadius
  },
  Grey: {
    borderColor: '#bbbbb2',
    backgroundColor: '#bbbbb2',
    borderRadius: borderRadius
  },
  GreyWhite: {
    borderColor: '#A9A8A8',
    backgroundColor: 'white',
    borderRadius: borderRadius,
    borderWidth: 1,
  },
  BlueWhite: {
    borderColor: '#0f99ef',
    backgroundColor: 'white',
    borderRadius: borderRadius,
    borderWidth: 1,
  },
  PurpleWhite: {
    borderColor: '#8e44ad',
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 3,
  },
  White: {
    backgroundColor: 'white',
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 22,
  }
})

module.exports = StyleButton;
