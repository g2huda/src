import React from 'react';
import {ImageBackground, Text, TouchableHighlight, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Colours} from './Colours';
import PropTypes from 'prop-types';

const Cell = ({colour, displayNumbers, onClick}) => (
  <TouchableOpacity disabled={onClick?false:true} onPress={onClick} style={{flex:1}}>
  <ImageBackground source={Colours[colour.colour]} style={styles.backGround} resizeMode='contain'  >
  <Text adjustsFontSizeToFit style={colour.colour === 'black'? {color:'white', fontWeight: 'bold'}: styles.number}>
    {colour.index>0&&displayNumbers?colour.index:""}
  </Text>
  </ImageBackground> 
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  backGround: {
    flex: 1, 
    width:undefined,
    height:undefined,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontWeight: 'bold'
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
