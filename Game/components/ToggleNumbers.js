import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Image, TouchableOpacity} from 'react-native'

const ToggleNumbers = ({toggleDisplayNumbers, image}) => (
    <TouchableOpacity style={styles.container} onPress={toggleDisplayNumbers}>
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

ToggleNumbers.PropTypes = {
    value: PropTypes.string.isRequired,
    toggleDisplayNumbers: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired
}
export default ToggleNumbers