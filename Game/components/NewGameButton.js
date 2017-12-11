import React from 'react'
import {StyleSheet, Image, TouchableOpacity} from 'react-native'

const NewGameButton = ({startGame, image}) => (
    <TouchableOpacity style={styles.container} onPress={startGame}>
        <Image source={image} style={styles.image}  resizeMode='contain' />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container:{
        flex: 0.15,
    },
    image: {
        flex:1, 
        width: undefined,
        height: undefined
    }
})

export default NewGameButton