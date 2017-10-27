// All code should be written in this file.
console.log("Running program")
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
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  //check input values
  // console.log(player,moveOneType,moveOneValue,moveTwoType,moveOneValue,moveThreeType,moveThreeValue)
  if(
    isValidPlayerName(player)
    && isValidMoveType( moveOneType )
    && isValidMoveType( moveTwoType )
    && isValidMoveType( moveThreeType)
    && isValidMoveValue( moveOneValue )
    && isValidMoveValue( moveTwoValue )
    && isValidMoveValue( moveThreeValue )
    && isValidMoveValues( moveOneValue, moveTwoValue, moveThreeValue )
  ){
    //conduct comparison if all values are valid
    if(player === 'Player One'){
      // console.log('In the player one if statement')
      playerOneMoveOneType = moveOneType;
      // console.log('Player one move one type:', playerOneMoveOneType)
      playerOneMoveOneValue = moveOneValue;
      playerOneMoveTwoType = moveTwoType;
      playerOneMoveTwoValue = moveTwoValue;
      playerOneMoveThreeType = moveThreeType;
      playerOneMoveThreeValue = moveThreeValue;
    } else if(player === 'Player Two') {
      playerTwoMoveOneType = moveOneType;
      playerTwoMoveOneValue = moveOneValue;
      playerTwoMoveTwoType = moveTwoType;
      playerTwoMoveTwoValue = moveTwoValue;
      playerTwoMoveThreeType = moveThreeType;
      playerTwoMoveThreeValue = moveThreeValue;
    }
  }
  else {
    //console.log("Invalid inputs to setPlayerMoves function")
  }
 };

const getRoundWinner = (roundNumber) => {
  if( isValidRound( roundNumber ) && isValidRoundVariables(roundNumber) ){

    let result;
    if(roundNumber === 1){
      // console.log('_______Round One_________')
      // console.log('Player One Move: ',playerOneMoveOneType, ' ', playerOneMoveOneValue)
      // console.log('Player Two Move: ',playerTwoMoveOneType, ' ', playerTwoMoveOneValue)
      result = compareTypes(playerOneMoveOneType,playerTwoMoveOneType);
      if(result === 'Tie'){
        result = tieBreak(playerOneMoveOneValue,playerTwoMoveOneValue);
      }
      return result;
    }
    else if(roundNumber === 2){
      // console.log('_______Round Two_________')
      // console.log('Player One Move: ',playerOneMoveTwoType, ' ', playerOneMoveTwoValue)
      // console.log('Player Two Move: ',playerTwoMoveTwoType, ' ', playerTwoMoveTwoValue)
      result = compareTypes(playerOneMoveTwoType,playerTwoMoveTwoType);
      if(result === 'Tie'){
        result = tieBreak(playerOneMoveTwoValue,playerTwoMoveTwoValue);
      }
      return result;
    }
    else if(roundNumber === 3){
      // console.log('_______Round Three_________')
      // console.log('Player One Move: ',playerOneMoveThreeType, ' ', playerOneMoveThreeValue)
      // console.log('Player Two Move: ',playerTwoMoveThreeType, ' ', playerTwoMoveThreeValue)
      result = compareTypes(playerOneMoveThreeType,playerTwoMoveThreeType);
      if(result === 'Tie'){
        result = tieBreak(playerOneMoveThreeValue,playerTwoMoveThreeValue);
      }
      return result;
    }
  }
  else {
    // console.log('Invalid round')
    return null;}
}

const getGameWinner = () => {
  //check if values are null
  if( isValidGlobalVariables() ){
    //set local variables
    let playerOneWins = 0;
    let playerTwoWins = 0;

    //get round winners
    let roundOneWinner = getRoundWinner(1);
    let roundTwoWinner = getRoundWinner(2);
    let roundThreeWinner = getRoundWinner(3);

    // console.log(':::::::::::::RESULTS:::::::::::')
    // console.log('Round One Winner: ', roundOneWinner)
    // console.log('Round Two Winner: ', roundTwoWinner)
    // console.log('Round Three Winner: ', roundThreeWinner)

    if(roundOneWinner === 'Player One'){playerOneWins++}
    else if(roundOneWinner === 'Player Two'){playerTwoWins++}

    if( roundTwoWinner === 'Player One'){playerOneWins++}
    else if(roundTwoWinner === 'Player Two'){playerTwoWins++}

    if( roundThreeWinner === 'Player One'){playerOneWins++}
    else if(roundThreeWinner === 'Player Two'){playerTwoWins++}

    // console.log('Player One Points: ', playerOneWins)
    // console.log('Player Two Points: ', playerTwoWins)
    if( playerOneWins === playerTwoWins){return 'Tie'}
    else if( playerOneWins > playerTwoWins){return 'Player One'}
    else if( playerOneWins < playerTwoWins){return 'Player Two'}
    else { return null }

  }
  else {return null}
}

const setComputerMoves = () => {
  //set moves
  playerTwoMoveOneValue = getRandomNumber(97)
  playerTwoMoveTwoValue = getRandomNumber(98 - playerTwoMoveOneValue)
  playerTwoMoveThreeValue = 99 - playerTwoMoveOneValue - playerTwoMoveTwoValue

  //set values
  playerTwoMoveOneType = getRandomMove();
  playerTwoMoveTwoType = getRandomMove();
  playerTwoMoveThreeType = getRandomMove();
}

const getRandomNumber = (ceiling) => {
  return Math.ceil(Math.random()*ceiling)
}

const getRandomMove = () => {
  let num = getRandomNumber(3)
  if(num === 3){return 'rock'}
  else if(num === 2){return 'scissors'}
  else if(num === 1){return 'paper'}
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

const tieBreak = (valueOne,valueTwo) => {
  if(valueOne > valueTwo){
    return 'Player One';
  }
  else if( valueOne < valueTwo){
    return 'Player Two';
  }else{
    return 'Tie';
  }
}

const isValidMoveType = (moveType) => {
  if(moveType === 'rock' || moveType === 'paper' || moveType === 'scissors'){
    return true;
  }
  else {return false;}
}

const isValidPlayerName = (playerName) => {
  if(playerName === 'Player One' || playerName === 'Player Two'){
    return true;
  }
  else {return false;}
}

const isValidMoveValue = (value) => {
  if(value > 0 && value < 99 ){return true}
  else{return false}
}

const isValidMoveValues = (valueOne, valueTwo, valueThree) => {
  let sum = valueOne + valueTwo + valueThree;
  //console.log(sum)
  if( sum > 99){
    return false;
  }
  else {return true;}
}

const isValidRoundVariables = ( round ) => {
  if(round === 1){
    if(playerOneMoveOneType && playerOneMoveOneValue && playerTwoMoveOneType && playerTwoMoveOneValue ){
      return true;
    } else {return false;}
  } else if(round === 2){
    if(playerOneMoveTwoType && playerOneMoveTwoValue && playerTwoMoveTwoType && playerTwoMoveTwoValue ){
      return true;
    } else {return false;}
  } else if(round === 3 ){
    if(playerOneMoveThreeType && playerOneMoveThreeValue && playerTwoMoveThreeType && playerTwoMoveThreeValue){
      return true;
    } else {return false;}
  }
}

const isValidGlobalVariables = () => {
  return isValidRoundVariables(1) && isValidRoundVariables(2) && isValidRoundVariables(3)
}

const isValidRound = ( round ) => {
  if( round === 1 || round === 2 || round === 3){
    return true;
  }
  else {return false;}
}
