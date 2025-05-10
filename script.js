'use strict';
//Score of Player 0 or 1 in Current Roll 

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

const playerDisplay0 = document.getElementById('score--0')
const playerDisplay1 = document.getElementById('score--1')

const currentScore0 = document.getElementById('current--0')
const currentScore1 = document.getElementById('current--1')

//Dice Element 
const diceElement = document.querySelector('.dice')


//Button Elements 
const resetButton = document.querySelector('.btn--new')
const rollButton = document.querySelector('.btn--roll')
const holdButton = document.querySelector('.btn--hold')

//Player Scores 

const finalScores = [0, 0]


//Intial State of the Game
let currentScore = 0;
let activePlayer = 0;
playerDisplay0.textContent = 0;
playerDisplay1.textContent = 0;
diceElement.classList.add('hidden')



//Event Listener for Game Logic 
rollButton.addEventListener('click', function(){
    //1. Generating Random Dice Roll 
    const dice = Math.trunc(Math.random() * 6) + 1

    //2. Display Dice Image 
    diceElement.classList.remove('hidden')
    diceElement.src = `dice-${dice}.png`
    console.log(`A ${dice} has been rolled`)

    
    //3. Check if 1 Has Been Rolled 
    if (dice !== 1){

    //If the roll is not 1 add to the current score 
    currentScore += dice
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{

    //Switch The Player and Reset the Score 
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
    console.log(`Active Player has Switched to ${activePlayer}`)
    }
  })

resetButton.addEventListener('click', function(){

})


holdButton.addEventListener('click', function(){

})
