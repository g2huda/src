import React, {Component} from 'react';

import BoardContainer from '../Board/BoardContainer';
import GiveUpButton from './components/GiveUpButton';
import NewGameButton from './components/NewGameButton';
import ToggleNumbers from './components/ToggleNumbers';
import {GameOptionImages} from './GameOptionImages';

import {Platform, StyleSheet, View, Text, ImageBackground, Dimensions, PixelRatio} from 'react-native'
const img = require('../Board/images/woods/wood5.jpg');

const Game = ({gameOver, loseGame, startGame, toggleDisplayNumbers}) => (
  <View style={styles.game}>
    <ImageBackground source={img} style={{flex:1}}>
      <View style={styles.statusBarBackground}></View>
      <View style={styles.row}>
        <View style={styles.boardContainer}>
          <BoardContainer />
        </View>
        <View style={styles.options}>
          {gameOver?<NewGameButton startGame={startGame} image={GameOptionImages['newGame']}/>:
          <GiveUpButton loseGame={loseGame} image={GameOptionImages['giveUp']}/>}
          <ToggleNumbers toggleDisplayNumbers={toggleDisplayNumbers} image={GameOptionImages['displayNumbers']}/>
        </View>
      </View>
    </ImageBackground>
  </View>
  
);
const styles = StyleSheet.create({
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 45 : 0,
  },
  game: {
    flex: 1,
  },
  boardContainer: {
    flex: 0.85,
  },
  options: {
    flex: 0.15,
    //justifyContent: "space-between",
    //alignContent:"space-between",
    backgroundColor: 'black'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  }

});
export default Game;
