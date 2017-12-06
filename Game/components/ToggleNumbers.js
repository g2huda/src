import React from 'react'
import PropTypes from 'prop-types'
import {View,Text, CheckBox} from 'react-native'
import {Switch} from 'react-native-switch'

const ToggleNumbers = ({value, displayNumbers, toggleDisplayNumbers}) => (
        <View style={{flexDirection:'row', justifyContent: 'space-between', padding:6}}>
            <Text>Display Numbers</Text>
            <Switch
            value={false}
            onValueChange={toggleDisplayNumbers}
            disabled={false}
            activeText={'On'}
            inActiveText={'Off'}
            circleSize={30}
            barHeight={15}
            circleBorderWidth={3}
            backgroundActive={'green'}
            backgroundInactive={'gray'}
            circleActiveColor={'#30a566'}
            circleInActiveColor={'#000000'}
            />
        </View>
)

ToggleNumbers.PropTypes = {
    value: PropTypes.string.isRequired,
    displayNumbers: PropTypes.bool.isRequired,
    toggleDisplayNumbers: PropTypes.func.isRequired
}
export default ToggleNumbers