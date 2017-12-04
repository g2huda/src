import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

import CheckButton from './components/CheckButton';
import KeyPegHolder from './components/KeyPegHolder';
import CellFactory,{PEG_ON_BOARD} from './components/CellFactory'


const Board = ({ style, gameOver, pegsOnBoard, currentRow, guessResults, 
  target, cursorType, placePeg, checkSelection, displayNumbers}) => {
  return pegsOnBoard.map((rowVal, rowInd) => {
    return (
    <View style={styles.board} key={`board${rowInd}`}>
      <View style={styles.keyPegs}>
        <KeyPegHolder key={`keyPegHolder${rowInd}`} keyPegs={target} guessResult={guessResults[rowInd]}/>
      </View> 
      {rowVal.map((colVal, colInd) =>(
      <View style={styles.middle} key={`peg${rowInd}${colInd}`}>
        {CellFactory.build({type: PEG_ON_BOARD, key: `${rowInd}${colInd}`, 
        colour: colVal?colVal:{colour:'empty',index:0}, 
        displayNumbers: displayNumbers,
        placePeg: placePeg,
        rowInd: rowInd, colInd: colInd, cursor:cursorType,
	canPlace: rowInd+1===currentRow && !gameOver})}
      </View>))
      }
      <View style={styles.button}>
      <CheckButton key={rowInd} currRow={rowInd+1} 
      activeRow={currentRow} 
      checkSelection={checkSelection}
      gameOver={gameOver}/>
      </View>
    </View>
  )})
}

const styles = StyleSheet.create({
  button: {
   alignSelf: "flex-end"
  },
  board: {
      //flex: 1,
      flexDirection: 'row',
      //justifyContent: 'center'
      //position: "relative"
  },
  keyPegs: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    width: Dimensions.get("screen").height/18,
    height: Dimensions.get("screen").height/18,
    justifyContent: "center",
    alignSelf: "center"
    //alignItems: "center",
  }
})

Board.PropTypes = {
  peg: PropTypes.shape({
    availableColours: PropTypes.arrayOf(PropTypes.string),
    target: PropTypes.arrayOf(PropTypes.string),
    currentRow: PropTypes.string,
    guessResults: PropTypes.arrayOf(PropTypes.shape({
      onSpot: PropTypes.number,
      notOnSpot: PropTypes.number
    })),
    currentGuess:PropTypes.arrayOf(PropTypes.string),
    pegsOnBoard: PropTypes.array,
    completed: PropTypes.bool
  }),
  cursorType: PropTypes.string.isRequired,
  placePeg: PropTypes.func.isRequired,
  checkSelection: PropTypes.func.isRequired,
}

export default Board;
