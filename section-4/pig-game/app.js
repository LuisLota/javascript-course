/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying;
let scoreToWin = 100;
let timeRolls = 0;

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random number
        let dices = [0, 0];
        var dice = Math.floor(Math.random() * 6) + 1;
        let diceTwo = Math.floor(Math.random() * 6) + 1;
        dices[0] = dice;
        dices[1] = diceTwo;
        //2. Display the result
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        let diceTwoDOM = document.querySelector('.dice-two');
        diceTwoDOM.style.display = 'block';
        diceTwoDOM.src = 'dice-' + diceTwo + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1 || diceTwo !== 1) {
            //Add score
            roundScore += dice + diceTwo;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }

        // if two 6 in a row // 
        if (dice == 6 || diceTwo == 6 || dice == 6 && diceTwo == 6) {
            timeRolls++;
            roundScore += dice;
            roundScore += diceTwo;

            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            console.log('6 first time-->', timeRolls);
        }
        // loose all points // 
        if (timeRolls == 2) {
            console.log('2 times 6 in a row', timeRolls);
            scores[activePlayer] = 0;
            document.getElementById('current-' + activePlayer).textContent = '0';
            document.getElementById('score-' + activePlayer).textContent = '0';
            timeRolls = 0;
            nextPlayer();
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= scoreToWin) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = !gamePlaying;
        } else {
            //Next player
            nextPlayer();
        }
    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-two').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    scoreToWin = 100;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}



/* modalbox*/
let modal = document.getElementById('myModal');
let btnModal = document.getElementById('myBtn');
let closeModal = document.getElementsByClassName('close')[0];

btnModal.onclick = function() {
    modal.style.display = 'block';
    document.getElementById('score-val').value = scoreToWin;
}

closeModal.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

//change score
function scoreChange() {
    scoreToWin = document.getElementById('score-val').value;
}

document.querySelector('.btn-changeScore').addEventListener('click', scoreChange);