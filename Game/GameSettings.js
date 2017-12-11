import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, ScrollView, StyleSheet}from 'react-native'
//import GameSettingsFactory from './GameSettingsFactory'

const GameSettings = ({gameSettings}) => (
  <ScrollView  /*scrollsToTop={false}*/  style={styles.menu}>
        <Text style={styles.header}> Game Settings </Text>
        {/* {gameSettings.settings.options.map((setting, ind) => 
          GameSettingsFactory.build({...gameSettings, value: setting, key:setting}))} */}
        <Text>Total wins: {gameSettings.totalWon} </Text>
        <Text>Total lost: {gameSettings.totalLost}</Text>
    </ScrollView>
)

const styles = StyleSheet.create({
  menu: {
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 45
  }
});
GameSettings.PropTypes = {
  gameSettings: PropTypes.shape({
    startNewGame: PropTypes.func,
    toggleDisplayNumbers: PropTypes.func,
    loseGame: PropTypes.func,
    startGame: PropTypes.func,
    settings: PropTypes.shape({
      displayNumbers: PropTypes.bool,
      options: PropTypes.arrayOf(PropTypes.string).isRequired 
    }),
    totalWon: PropTypes.number.isRequired,
    totalLost: PropTypes.number.isRequired 
  })
}
export default GameSettings