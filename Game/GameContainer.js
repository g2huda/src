import React, { Component } from 'react';
import {Alert} from 'react-native';
import SideMenu from 'react-native-side-menu';

import Game from './Game';
import GameSettings from './GameSettings';

import {startNewGame, toggleDisplayNumbers, loseGame, winGame, updateMenu} from '../App/Actions/gameActions';
import {createBoard} from '../App/Actions/pegActions';

import {connect} from 'react-redux';

class GameContainer extends Component {

  constructor(props){
    super(props);
    props.gameSettingsFunctions.startNewGame();
    this.startGame = this.startGame.bind(this);
  }

  componentWillReceiveProps({guessResults, currentRow}){
    let {columns} = this.props;
    
    if(guessResults !== this.props.guessResults){
      if (guessResults[this.props.currentRow-1] && guessResults[this.props.currentRow-1].onSpot === columns){
        this.props.gameSettingsFunctions.winGame();
        Alert.alert('',"YOU WIN :)");
      } else if(currentRow === 0){
        this.props.gameSettingsFunctions.loseGame();
        Alert.alert('', "YOU LOST :(");
      }  
    }
  }

  componentWillMount(){
    this.props.createBoard(4, 12);
  }
  
  componentWillUnmount(){
    console.log("COMPONENT WILL UNMOUNT");  
  }
  
 startGame(){
    this.props.gameSettingsFunctions.startNewGame();
    this.props.createBoard(4, 12);
  }
  

  render() {
    const gameStatus={totalWon: this.props.game.totalWon,
      totalLost: this.props.game.totalLost};

    
    const menu = <GameSettings gameSettings={gameStatus} />;
    
    return(
      <SideMenu menu={menu}>
        <Game gameOver={this.props.game.gameOver} startGame={this.startGame} 
        loseGame={this.props.gameSettingsFunctions.loseGame}
        toggleDisplayNumbers={this.props.gameSettingsFunctions.toggleDisplayNumbers} />
      </SideMenu>
    );
  }
}

function mapStateToProps(state){
  return {
    columns: state.peg.columns,
    game: state.game,
    currentRow: state.peg.currentRow,
    guessResults: state.peg.guessResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gameSettingsFunctions: {
      startNewGame: () => {
        dispatch(startNewGame())
      },
      toggleDisplayNumbers: () => {
        dispatch(toggleDisplayNumbers())
      },
      loseGame: () => {
        dispatch(loseGame())
      },
      winGame: () => {
        dispatch(winGame())
      },
      updateMenu: (isOnMenu) => {
        dispatch(updateMenu(isOnMenu))
      }
    },
    createBoard: (columns, rows) => {
      dispatch(createBoard(columns, rows))
    },
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
