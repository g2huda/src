import React from 'react'
import PropTypes from 'prop-types'
import {View,Text, CheckBox} from 'react-native'

const ToggleNumbers = ({value, displayNumbers, toggleDisplayNumbers}) => (
        <View>
        <CheckBox
        value={displayNumbers}
        onValueChange={toggleDisplayNumbers}
        />
        <Text>Display Numbers</Text>
        </View>
)

ToggleNumbers.PropTypes = {
    value: PropTypes.string.isRequired,
    displayNumbers: PropTypes.bool.isRequired,
    toggleDisplayNumbers: PropTypes.func.isRequired
}
export default ToggleNumbers