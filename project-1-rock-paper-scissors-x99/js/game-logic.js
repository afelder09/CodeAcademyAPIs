// All code should be written in this file.

// set 12 global variables
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

// Function to set
const setPlayerMoves = (player,
                        moveOneType,
                        moveTwoType,
                        moveThreeType,
                        moveOneValue,
                        moveTwoValue,
                        moveThreeValue
                      ) => {
  //check input values
  if(
    isValidPlayerName(player) &&
    isValidMoveType( moveOneType ) &&
    isValidMoveType( moveTwoType ) &&
    isValidMoveType( moveThreeValue) &&
    isValidMoveValue( moveOneValue ) &&
    isValidMoveValue( moveTwoValue ) &&
    isValidMoveValue( moveThreeValue )
  ){
    //conduct comparison if all values are valid
    if(player == 'Player One'){
      // console.log('In the player one if statement')
      playerOneMoveOneType = moveOneType;
      // console.log('Player one move one type:', playerOneMoveOneType)
      playerOneMoveOneValue = moveOneValue;
      playerOneMoveTwoType = moveTwoType;
      playerOneMoveTwoValue = moveTwoValue;
      playerOneMoveThreeType = moveThreeType;
      playerOneMoveThreeValue = moveThreeValue;
    } else if(player == 'Player Two') {
      playerTwoMoveOneType = moveOneValue;
      playerTwoMoveOneValue = moveOneValue;
      playerTwoMoveTwoType = moveTwoType;
      playerTwoMoveTwoValue = moveTwoValue;
      playerOneMoveThreeType = moveThreeType;
      playerTwoMoveThreeValue = moveThreeValue;
    }
  }
 };

const getRoundWinner = (roundNumber) => {

  if(roundNumber === 1){
    return compareTypes(playerOneMoveOneType,playerTwoMoveOneType);
  }
  else if(roundNumber === 2){
    return compareTypes(playerOneMoveTwoType,playerTwoMoveTwoType);
  }
  else if(roundNumber === 3){
    return compareTypes(playerOneMoveThreeType,playerTwoMoveTwoType);
  }
  else{
    return null;
  }
}


const getGameWinner = () => {
  //check if values are null


  //set local variables
  let playerOneWins = 0;
  let playerTwoWins = 0;

  //Round One
  let roundOneWinner = getRoundWinner(1)
  if(roundOneWinner === 'Player One'){playerOneWins++}
  else if(roundOneWinner === 'Player Two'){playerTwoWins++}
  else{
    if(playerOneMoveOneValue>playerTwoMoveOneValue){playerOneWins++}
    else if(playerOneMoveValue<playerTwoMoveOneValue){playerTwoWins++}
  }

  //Round Two
  let roundTwoWinner = getRoundWinner(2)
  if(roundTwoWinner === 'Player One'){playerOneWins++}
  else if(roundTwoWinner === 'Player Two'){playerTwoWins++}
  else{
    if(playerOneMoveTwoValue>playerTwoMoveTwoValue){playerOneWins++}
    else if(playerOneMoveTwoValue<playerTwoMoveTwoValue){playerTwoWins++}
  }

  //Round Three
  let roundThreeWinner = getRoundWinner(3)
  if(roundThreeWinner === 'Player One'){playerOneWins++}
  else if(roundThreeWinner === 'Player Two'){playerTwoWins++}
  else{
    if(playerOneMoveThreeValue>playerTwoMoveThreeValue){playerOneWins++}
    else if(playerOneMoveThreeValue<playerTwoMoveThreeValue){playerTwoWins++}
  }

  //Determine winner
  if(playerOneWins > playerTwoWins){return 'Player One'}
  else if(playerOneWins < playerTwoWins){return 'Player Two'}
  else if (playerOneWins === playerTwoWins){return 'Tie'}
  else {return null}
}

const setComputerMoves = () => {
  //set moves

  //set values
}

const compareTypes = (playerOneType, playerTwoType) => {
  //valid types

  if(playerOneType === "rock"){
    if(playerTwoType === "paper"){return "Player Two";}
    else if(playerTwoType === "scissors"){return "Player One";}
    else {return "Tie"}
  }
  if(playerOneType === 'paper'){
    if(playerTwoType === 'rock'){return 'Player One'}
    else if(playerTwoType === "scissors"){return 'Player Two'}
    else {return 'Tie'}
  }
  if(playerOneType === 'scissors'){
    if(playerTwoType === 'rock'){return 'Player Two'}
    else if(playerTwoType === 'paper'){return 'Player One'}
    else {return 'Tie'}
  }
}

const isValidMoveType = (moveType) => {
  if(moveType == 'rock' || moveType == 'paper' || moveType == 'scissors'){
    return true;
  }
  else {return false;}
}

const isValidPlayerName = (playerName) => {
  if(playerName == 'Player One' || playerName == 'Player Two'){
    return true;
  }
  else {return false;}
}

const isValidMoveValue = (value) => {
  if(value>0){return true}
  else{return false}
}
