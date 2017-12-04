import React from 'react';
import {View, StyleSheet} from 'react-native';

import Shield from './components/Shield'
import PegHolder from './components/PegHolder'
import Board from './Board'

const BoardBuilder = ({shield, board, boardDispatch, pegHolder, pegHolderDispatch}) => (
  <View style={styles.container}>  
    <View style={styles.boardContainer}> 
      <Shield {...shield} />
      <Board style={styles.board} {...board} {...boardDispatch} />
    </View>
    <View style={styles.pegHolder}>
      <PegHolder {...pegHolder} {...pegHolderDispatch} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
  },
  boardContainer: {
    flex: 0.9,
    borderStyle: 'solid',
    borderWidth: 1
  },
  pegHolder: {
    flex: 0.1,
    alignContent: "center",
    justifyContent: "center"
  }
})
export default BoardBuilder;