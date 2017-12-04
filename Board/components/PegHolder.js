import React from 'react'
import {View} from 'react-native'
import CellFactory, {PEG_HOLDER} from './CellFactory'
//import './PegHolder.css'

const PegHolder = ({style, values, displayNumbers, onPegClick}) => (
    values.map((colour, index) =>  
        {return CellFactory.build({type:PEG_HOLDER, key:index, 
            colour: colour, 
            displayNumbers:displayNumbers, 
            onPegClick:onPegClick})}
        )
)

export default PegHolder