/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  Dimensions,
  Image,
  BackHandler
} from 'react-native';
import RootStack from './src/Rootstack'
import { AsyncStorage } from 'react-native';
import RootStack2 from './src/Rootstack2'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      istrue: false,
      showSplash: true
    }
    AsyncStorage.getItem('id').then(i => {
     
      if (i != null)
        this.setState({ istrue: true });
      else
        this.setState({ istrue: false });


    })

    console.disableYellowBox = true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showSplash: false })
    }, 2000);

  }

  render() {
    let { w, h } = Dimensions.get('window');
    if (this.state.showSplash)
      return (

        <Image style={{ width: w, height: h, flex: 1 }} source={require('./src/images/SplashScreen.jpg')} />

      );
    else if (this.state.istrue)
      return (
        <RootStack2 />
      );
    else
      return (
        <RootStack />
      );



  }
}

