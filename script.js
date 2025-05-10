'use strict';
//Score of Player 0 or 1 in Current Roll 
const playerDisplay0 = document.getElementById('score--0')
const playerDisplay1 = document.getElementById('score--1')

//Dice Element 
const dice = document.querySelector('.dice')


//Button Elements 
const resetButton = document.querySelector('.btn--new')
const rollButton = document.querySelector('.btn--roll')
const holdButton = document.querySelector('.btn--hold')




//Intial State of the Game
playerDisplay0.textContent = 0;
playerDisplay1.textContent = 0;
dice.classList.add('hidden')



//Event Listener for Game Logic 
rollButton.addEventListener('click', function(){

})

resetButton.addEventListener('click', function(){

})


holdButton.addEventListener('click', function(){
  
})
