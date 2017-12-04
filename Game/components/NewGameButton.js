import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const NewGameButton = ({startGame}) => (
    <TouchableOpacity onPress={startGame}>
        <View style={styles.container}>
            <Text adjustsFontSizeToFit style={styles.txt}>NEW GAME</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container:{
        //flex: 1,
        padding: 10,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center"
    },
    txt:{
        fontWeight: 'bold'
    }
})

export default NewGameButton