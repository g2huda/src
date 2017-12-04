import React from 'react'
import {View, StyleSheet} from 'react-native'
import CellFactory, {SHIELD} from './CellFactory'

const Shield = ({values, gameOver, displayNumbers}) => (
    <View style={styles.Shield}>
    {values.map((val, ind) =>  
        {return CellFactory.build({type:SHIELD, key:`${SHIELD}${ind}`, 
            gameOver: gameOver, 
            colour:val, 
            displayNumbers:displayNumbers})}
    )}
</View>
)

const styles = StyleSheet.create({
    Shield: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default Shield