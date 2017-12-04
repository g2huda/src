import React from 'react'
import {View, StyleSheet} from 'react-native'
import CellFactory, {SHIELD} from './CellFactory'

const Shield = ({values, gameOver, displayNumbers}) => (
    <View style={styles.Shield}>
    {values.map((val, ind) =>  (
        <View key={`${SHIELD}${ind}`} style={{flex:0.18}}>
        {CellFactory.build({type:SHIELD, key:`${SHIELD}${ind}`, 
            gameOver: gameOver, 
            colour:val, 
            displayNumbers:displayNumbers})
        }
        </View>
    ))}
</View>
)

const styles = StyleSheet.create({
    Shield: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Shield