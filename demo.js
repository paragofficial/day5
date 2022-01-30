let luckyNumber = Math.floor(Math.random() * 4); 

let score = 20;
let highScore = 0;

let scoreEl = document.querySelector('.score');
const message = document.querySelector('.message');
let highScoreEl = document.querySelector('.highscore');
let guessEl = document.querySelector('.guess');
let body = document.querySelector('body');

scoreEl.innerHTML = score;
highScoreEl.innerHTML = highScore;

console.log(luckyNumber);

const onClick = function () {
  const userInput = guessEl.value;
  // body.style = 'background-color: #219F94';
  if (luckyNumber == userInput) {
    message.innerHTML = 'You guessed the correct color!';

    if(luckyNumber == userInput && userInput ==0 ){
      body.style = 'background-color: #d42b15';
    }
    if(luckyNumber == userInput && userInput ==1 ){
      body.style = 'background-color: #07f51f';
    }
    if(luckyNumber == userInput && userInput ==2 ){
      body.style = 'background-color: #0307ff';
    }
    if(luckyNumber == userInput && userInput ==3 ){
      body.style = 'background-color: #b3a940';
    }

    if (score > highScore) {
      highScore = score;
      highScoreEl.innerHTML = highScore;
    }
  } else {
    score--;

    scoreEl.innerHTML = score;

    if (score == 0) {
      document.querySelector('#idtitle').innerHTML ='You have lost try again!';
      body.style = 'background-color: #E84855';
    }

  }
};

document.querySelector('#check').addEventListener('click', onClick);

document
  .querySelector('#again')
  .addEventListener('click', function () {
    document.querySelector('#idtitle').innerHTML =
      'How lucky are you?';
    luckyNumber = Math.floor(Math.random() * 4);
    console.log(luckyNumber);
    score = 20;
    scoreEl.innerHTML = score;
    message.innerHTML = 'Start guessing!';
    guessEl.value = 0;
    document.querySelector('body').style = 'background-color: #222';
  });