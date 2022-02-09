"use strict"

let score = 20;
let highscore = 0;
let num = Math.trunc(Math.random() * 20 + 1);



const displaymessage = function (message){
  document.querySelector('.message').textContent =  message;
}



document.querySelector('.again').addEventListener('click' , function() {
             score = 20;
             num = Math.trunc( Math.random() * 20 + 1);
             document.querySelector('.score').textContent = score;
             document.body.style.backgroundColor ='#333';
             displaymessage('Start guessing ...');        
             document.querySelector('.number').textContent = '?';
             document.querySelector('.number').style.width = '15rem';
             document.querySelector('.guess').value = '';
})


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // if i win
  if (!guess) {
    displaymessage('not a valid input');
  }

  if (guess == num) {
    displaymessage('🥳🥳 Correct guess');
    document.querySelector('.number').textContent = num;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displaymessage('😜 You won');

    if(score>highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    
  }
  //if guess is wrong 
        else if(guess !== num){
          if(score > 1){
            displaymessage(guess > num ? '📉 guess too high' : '📉 guess too low');
          score--;
          document.querySelector('.score').textContent = score;}
         else {
          displaymessage('😢 You lost the game');
          document.body.style.backgroundColor = 'red';
          score--;
          document.querySelector('.score').textContent = 0;
        }
      }
});