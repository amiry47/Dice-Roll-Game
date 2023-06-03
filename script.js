'use strict';

// Selecting elements
const player0El  = document.querySelector(".player--0");
const player1El  = document.querySelector(".player--1");
const score0El   = document.querySelector("#score--0");
const score1El   = document.getElementById("score--1");
const diceEl     = document.querySelector(".dice");
const btnNew     = document.querySelector(".btn--new");
const btnRoll    = document.querySelector('.btn--roll');
const btnHold    = document.querySelector(".btn--hold");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

let playing,scores,currentScroce,activePLayer;

const init = function (){

playing = true;
scores = [0,0];
currentScroce = 0 ;
activePLayer  = 0 ;

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add("hidden");

         console.log("new Game");
       
    
        current0El.textContent=0;
        current1El.textContent=0;
        player0El.classList.remove('player--winner');
        player1El.classList.remove('player--winner');
        player0El.classList.add('player--active');
        player0El.classList.remove('player--active');

};

init();



// switch player 
const switchPlayer = function (){
    document.getElementById(`current--${activePLayer}`).textContent = currentScroce = 0;
        currentScroce = 0 ;
        activePLayer = activePLayer === 0 ? 1 : 0 ; 
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
}

// Starting Conditions


// Rolling Dice Funtionallity
btnRoll.addEventListener("click", function(){

    if(playing){

    const dice = Math.trunc(Math.random() * 6 + 1 );

    diceEl.classList.remove("hidden");
    diceEl.src =`dice-${dice}.png`;
    if (dice !== 1){
        currentScroce += dice;
        document.getElementById(`current--${activePLayer}`).textContent =currentScroce;
        // current0El.textContent = currentScroce;
    }
    else{
        switchPlayer();
    }
}
    

});

btnHold.addEventListener("click", function ( ){
// Holding Scroce
if (playing){
scores[activePLayer] += currentScroce;
document.getElementById(`score--${activePLayer}`).textContent = scores[activePLayer];

if (scores[activePLayer] >=20){
    playing = false ;
    diceEl.classList.add("hidden");
    document.querySelector(`.player--${activePLayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePLayer}`).classList.remove('player--active');
}
else{
    switchPlayer();
}
} 

});


btnNew.addEventListener("click", init);