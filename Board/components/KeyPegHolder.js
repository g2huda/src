import React from 'react'
import {View, ImageBackground, StyleSheet, Dimensions} from 'react-native'
import PropTypes from 'prop-types'
import {Colours} from './Colours'
//import './KeyPegHolder.css'

const dim = Dimensions.get("screen").height/40;

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
   
    return arr.map((rowVal, rowInd) => (
        <View style={styles.row} key={`keyPeg${rowInd}`}>
         {rowVal.map((colVal, colInd) => (
            <ImageBackground key={`keyPeg${rowInd}${colInd}`} source={Colours[colVal]} style={{width:dim, height:dim}} />
          ))}
        </View>
    ));
}

const KeyPegHolder = ({keyPegs, guessResult}) => {return createHolder(keyPegs, guessResult)};
       
const styles = StyleSheet.create({
    row: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
KeyPegHolder.PropTypes = {
    keyPegs: PropTypes.array,
    guessResult: PropTypes.shape({
        onSpot: PropTypes.number,
        notOnSpot: PropTypes.number
    })
}

export default KeyPegHolder