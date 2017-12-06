import React from 'react'
import {View, ImageBackground, StyleSheet, Dimensions} from 'react-native'
import PropTypes from 'prop-types'
import {Colours} from './Colours'

const createHolder = (keyPegs, guessResult) => {
    let cols = Math.ceil(keyPegs.length/2);
    
    let onSpot = Array(guessResult.onSpot).fill("black");
    let notOnSpot = Array(guessResult.notOnSpot).fill("white");
    let tmp = onSpot.concat(notOnSpot);
    let classNames = keyPegs.map((val, ind) => ind<tmp.length? tmp[ind]:"empty");
    
    //divide the classNames equally into the table
    let arr = [];
    for(let y=0; y < classNames.length; y+=cols){
        arr.push(classNames.slice(y, y+cols));
    }
   
    return ( 
        <View style={styles.container}>
        {arr.map((rowVal, rowInd) => (
        <View style={styles.row} key={`keyPeg${rowInd}`}>
         {rowVal.map((colVal, colInd) => (
             
            <ImageBackground key={`keyPeg${rowInd}${colInd}`} 
            source={Colours[colVal]} style={styles.image}  resizeMode='contain' />
            
          ))}
        </View>
    ))}
    </View>
    )
}

const KeyPegHolder = ({keyPegs, guessResult}) => {return createHolder(keyPegs, guessResult)};
       
const styles = StyleSheet.create({
    container: {
        flex:0.8,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        padding:2,
        //justifyContent: "center",
        //alignContent: "center",
        //alignItems: 'center'
    },
    row: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        flex:1,
        width:undefined,
        height:undefined,
    },
})
KeyPegHolder.PropTypes = {
    keyPegs: PropTypes.array,
    guessResult: PropTypes.shape({
        onSpot: PropTypes.number,
        notOnSpot: PropTypes.number
    })
}

export default KeyPegHolder