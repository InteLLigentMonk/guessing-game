const rightAnswere = Math.round(Math.random() * 100);
console.log(rightAnswere);
let guess = document.querySelector('#input');
let button = document.querySelector('.btn');
let prompt = document.querySelector('#prompt');
let lastGuess = document.querySelector('#last-guess');
let clue = document.querySelector('#clue');
let totalGuesses = document.querySelector('#total-guesses');

function isBetween0And100(value) {
  const regex = /^(100|[1-9]?[0-9])$/;
  return regex.test(value);
}

function promptMessage(color, text){
  prompt.style.backgroundColor = color;
  prompt.style.opacity = 1;
  prompt.textContent = text;
  setTimeout(function() {
    prompt.style.opacity = 0;
}, 5000);
}

let total = 0;
button.addEventListener('mouseup', ()=>{

  if(isBetween0And100(guess.value)){
    lastGuess.textContent = guess.value;
    if(guess.value == rightAnswere){
      promptMessage('#67c787','You won! Refresh page to try again');
      clue.textContent = 'Winner';
      clue.style.color = 'var(--clr-success)';
      
      total++;
      totalGuesses.textContent = total;
    }else if( guess.value < rightAnswere){
      clue.textContent = 'Higher';
      clue.style.color = 'var(--clr-warning)';
      total++;
      totalGuesses.textContent = total;
    }else {
      prompt.textContent = '';
      clue.textContent = 'Lower';
      clue.style.color = 'var(--clr-info)';
      total++;
      totalGuesses.textContent = total;
    }
  }else{
    promptMessage('#c76767','You must enter a value between 0-100');
  }
})
