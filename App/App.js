import React, { Component } from 'react';
//import './App.css';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Provider} from 'react-redux';
import store from './store'

import GameContainer from '../Game/GameContainer';

//console.log(store.getState());
  
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {/* <View style={styles.container}>
          <Text style={styles.title}>Mastermind</Text> */}
          <GameContainer />
     {/*  </View> */}
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});

export default App;
