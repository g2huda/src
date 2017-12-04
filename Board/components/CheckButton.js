import React from 'react'
import {Button, TouchableOpacity, Image} from 'react-native'
import PropTypes from 'prop-types'

const checkMark = require('../images/checkMark.png');

const button = (checkSelection) => {
    return (<TouchableOpacity onPress={checkSelection}>
    <Image source={checkMark} style={{width: 50, height: 50}}></Image>
    </TouchableOpacity>
    )
}

const CheckButton = ({currRow, activeRow, checkSelection, gameOver}) => 
    {return currRow===activeRow && !gameOver? button(checkSelection):null}
     
CheckButton.PropTypes = {
    currRow: PropTypes.number.isRequired,
    activeRow: PropTypes.number.isRequired,
    checkSelection: PropTypes.func.isRequired
}
export default CheckButton