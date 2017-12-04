import React from 'react'
import PropTypes from 'prop-types'
import { START_NEW_GAME, TOGGLE_DISPLAY_NUMBERS, GIVE_UP} from '../App/Actions/gameActions';

import NewGameButton from './components/NewGameButton';
import ToggleNumbers from './components/ToggleNumbers';
import GiveUpButton from './components/GiveUpButton';

class GameSettingsFactory {
    static build = (data) => {
        switch (data.value){
            //case START_NEW_GAME:
              //  return <NewGameButton key={data.key} startGame={data.startGame} />
            case TOGGLE_DISPLAY_NUMBERS:
                return <ToggleNumbers key={data.key} value={TOGGLE_DISPLAY_NUMBERS}
                    displayNumbers={data.settings.displayNumbers} 
                    toggleDisplayNumbers={data.toggleDisplayNumbers} />
            //case GIVE_UP:
              //  return <GiveUpButton key={data.key} loseGame={data.loseGame} />
            default: 
                 console.log("The GameSettingFactory does not contain this setting")
                 return undefined
        }
    }
}

GameSettingsFactory.PropTypes = {
    data: PropTypes.shape({
      startNewGame: PropTypes.func,
      toggleDisplayNumbers: PropTypes.func.isRequired,
      loseGame: PropTypes.func.isRequired,
      startGame: PropTypes.func.isRequired,
      settings: PropTypes.shape({
        displayNumbers: PropTypes.bool.isRequired,
        options: PropTypes.arrayOf(PropTypes.string)
      }) 
    })
  }
  

export default GameSettingsFactory;