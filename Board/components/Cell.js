import React from 'react';
import {ImageBackground, Text, TouchableHighlight, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Colours} from './Colours';
import PropTypes from 'prop-types';

const width = Dimensions.get("screen").height;
const Cell = ({colour, displayNumbers, onClick}) => (
  <TouchableOpacity disabled={onClick?false:true} onPress={onClick}>
  <ImageBackground source={Colours[colour.colour]} style={styles.backGround}   >
  <Text style={colour.colour === 'black'? {color:'white', fontSize:25}: styles.number}>
    {colour.index>0&&displayNumbers?colour.index:""}
  </Text>
  </ImageBackground> 
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  backGround: {
    width: width/15,
    height: width/15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize:25,
  }
})

Cell.PropTypes = {
  colour: PropTypes.shape({
    colour: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  }),
  displayNumbers: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Cell;
