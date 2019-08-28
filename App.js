import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
//import StackNavigation from './Stack/StackNavigation'
import SwitchNavigation from './Switch/SwitchNavigation'


export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:20}}>
          <SwitchNavigation/>
        </View>
    );
  }
}