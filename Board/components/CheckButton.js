import React from 'react'
import {Button, TouchableOpacity, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

const checkMark = require('../images/checkMark.png');

const button = (checkSelection) => {
    return (<TouchableOpacity onPress={checkSelection} style={{flex:1}}>
    <Image source={checkMark} style={styles.button} resizeMode="contain"></Image>
    </TouchableOpacity>
    )
}

const CheckButton = ({currRow, activeRow, checkSelection, gameOver}) => 
    {return currRow===activeRow && !gameOver? button(checkSelection):null}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        width: undefined,
        height: undefined,
    }
})
CheckButton.PropTypes = {
    currRow: PropTypes.number.isRequired,
    activeRow: PropTypes.number.isRequired,
    checkSelection: PropTypes.func.isRequired
}
export default CheckButton