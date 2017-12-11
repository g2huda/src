import React from 'react'
import {StyleSheet, Image, TouchableOpacity} from 'react-native'
//import {GameOptionImages} from '../GameOptionImages'
const GiveUpButton = ({loseGame, image}) => (
    <TouchableOpacity style={styles.container} onPress={loseGame}>
        <Image source={image} style={styles.image}  resizeMode='contain' />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container:{
        flex: 0.15,
        paddingTop: 10
        //padding: 10,
        //backgroundColor: "grey",
       // justifyContent: "flex-start",
        //alignItems: "flex-start",
       // alignContent: "flex-start"
    },
    image: {
        flex:1, 
        width: undefined,
        height: undefined
    }
})
export default GiveUpButton