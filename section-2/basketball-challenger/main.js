// john games 
const game1 = 100;
const game2 = 120;
const game3 = 103;

//mike game 
const game4 = 116;
const game5 = 94;
const game6= 123;

//mary game 
const game7 = 200;
const game8 = 134;
const game9 = 105;

// avarage 
const avarageJohn = (game1 + game2 + game3) / 3;
const avarageMike = (game4 + game5 + game6) / 3;
const avarageMary = (game7 + game8 + game9) / 3;
console.log('avg john --->',avarageJohn);
console.log('avg mike --->',avarageMike);
console.log('avg mary --->',avarageMary);


// who have more avarage 
if(avarageJohn > avarageMike && avarageJohn > avarageMary){
console.log('John wons! with --->',avarageJohn + ' points');
}
 else if (avarageMike > avarageJohn && avarageMike >  avarageMary){
    console.log('Mike wons! with --->',avarageMike + ' points');

}

else if(avarageMary > avarageJohn && avarageMary >  avarageMike){
    console.log('mary wons! with --->',avarageMary + ' points');

}

else {
console.log('its a draw', avarageJohn);
}

