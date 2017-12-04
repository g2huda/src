import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Cell from './Cell';
export const SHIELD = 'SHIELD';
export const PEG_ON_BOARD = 'PEG_ON_BOARD';
export const PEG_HOLDER = 'PEG_HOLDER';

class CellFactory {
    static build = (data) => {
        switch (data.type){
            case SHIELD:
                return (
                    <Cell key={data.key}
                    colour={data.gameOver?data.colour: {colour:"Shield", index:0}}
                    displayNumbers={data.displayNumbers} />  
                )
                
            case PEG_HOLDER:
                return (
                    <Cell key={data.key}
                    colour={data.colour}
                    displayNumbers={data.displayNumbers}
                    onClick={()=>data.onPegClick(data.colour)}/>
                )

            case PEG_ON_BOARD:
                return ( 
                    <Cell key={data.key} 
                    colour={data.colour}
                    displayNumbers={data.displayNumbers} 
                    onClick={data.canPlace?()=>data.placePeg(data.rowInd, data.colInd, data.cursor):null}/>
                )

            default: return undefined
        }
    }
}

CellFactory.PropTypes = {
    data: PropTypes.shape({
        row: PropTypes.arrayOf(PropTypes.string),
        gameOver: PropTypes.bool
    })
}

export default CellFactory