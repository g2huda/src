import React from 'react'
import {View} from 'react-native'
import CellFactory, {PEG_HOLDER} from './CellFactory'

const PegHolder = ({style, values, displayNumbers, onPegClick}) => (
    values.map((colour, index) =>  
        <View key={index} style={{flex:0.1}}>
        {CellFactory.build({type:PEG_HOLDER, key:index, 
            colour: colour, 
            displayNumbers:displayNumbers, 
            onPegClick:onPegClick})}
        </View>
        )
)

export default PegHolder