import { START_NEW_GAME, WIN, LOSE, TOGGLE_DISPLAY_NUMBERS, GIVE_UP, UPDATE_MENU} from '../Actions/gameActions'

const initialState = {
    //gameStarted: false,
    gameOver: false,
    gameWon: false,
    gameLost: false,
    totalWon: 0,
    totalLost: 0,
    displayTarget: false,
    onMenu: false,
    gameSettings: {
        options: [TOGGLE_DISPLAY_NUMBERS/*, GIVE_UP, START_NEW_GAME*/],
        displayNumbers: false //numbers on pegs for color blind 
    }
}

const game = (prevState=initialState, action) => {
    switch (action.type){
        case START_NEW_GAME: 
            return {...prevState,
                gameWon: false,
                gameLost: false,
                gameOver: false,
                displayTarget: false}
        case WIN:
            return {...prevState, 
                gameWon: true,
                totalWon: prevState.totalWon +1,
                gameOver: true,
                displayTarget: true}
        case LOSE:
            return {...prevState,
                gameLost: true,
                totalLost: prevState.totalLost +1,
                gameOver: true,
                displayTarget:true}
        case TOGGLE_DISPLAY_NUMBERS:
            return {...prevState,
                gameSettings: {...prevState.gameSettings, 
                    displayNumbers: !prevState.gameSettings.displayNumbers}}
        case UPDATE_MENU:
            return {...prevState,
                onMenu: action.isOnMenu}
        default:
            return prevState
    }
};

export default game