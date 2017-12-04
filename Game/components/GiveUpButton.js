import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
const GiveUpButton = ({loseGame}) => (
    <TouchableOpacity onPress={loseGame}>
        <View style={styles.container}>
            <Text adjustsFontSizeToFit style={styles.txt}>GIVE UP</Text>
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
export default GiveUpButton