import React from 'react'
import {View, StyleSheet} from 'react-native'
import CellFactory, {PEG_HOLDER} from './CellFactory'

const PegHolder = ({style, values, displayNumbers, onPegClick}) => (
    values.map((colour, index) =>  
        <View key={index} style={styles.container}>
        {CellFactory.build({type:PEG_HOLDER, key:index, 
            colour: colour, 
            displayNumbers:displayNumbers, 
            onPegClick:onPegClick})}
        </View>
        )
)

const styles = StyleSheet.create({
    container: {
        flex: 0.08,
        //backgroundColor: 'grey',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: 'black',
        //shadowOpacity: 0.75,
        //shadowRadius: 5,
        //shadowColor: 'red',
        //shadowOffset: { height: 0, width: 0 },
    }
})
export default PegHolder