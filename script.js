
// Variable declarations
const rightAnswere = Math.round(Math.random() * 100);
let guess = document.querySelector('#input');
let prompt = document.querySelector('#prompt');
let lastGuess = document.querySelector('#last-guess');
let clue = document.querySelector('#clue');
let totalGuesses = document.querySelector('#total-guesses');
let list = document.querySelector('#list');
let listArray = [];
let total = 0;
// Variable declarations

// Global functions
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
  }, 3000);
}
// Global functions


document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if(isBetween0And100(guess.value)){
      
      // Change color of Total depending on how many tries.
      if(total <= 4){
        totalGuesses.style.color ='var(--clr-success)';
      } else if(total > 4 && total <=9){
        totalGuesses.style.color ='var(--clr-warning)';
      } else{
        totalGuesses.style.color ='var(--clr-error)';
      }

      
      if(listArray.length >= 0){
        // Show the previous guesses box after first guess.
        document.querySelector('.guess-box').classList.add('display-flex');
        if(!listArray.includes(guess.value)){
          
          // Update the last guess field to the entered value.
          lastGuess.textContent = guess.value;
          
          // Assemble array of guesses and output to guess-box
          listArray.push(guess.value);
          listItem = '';
          listArray.forEach((element)=>{
            listItem += `<li>${element}, </li>`;
          })
          list.innerHTML = listItem;
          if(guess.value == rightAnswere){
            // If guess is right do this:
            promptMessage('#67c787','You won! Page will reload so you can try again!');
            clue.textContent = 'Winner';
            clue.style.color = 'var(--clr-success)';
            total++;
            totalGuesses.textContent = total;
            setTimeout(function() {
              location.reload();
            }, 4500);
          }else if( guess.value < rightAnswere){
            // If guess is low do this:
            clue.textContent = 'Low';
            clue.style.color = 'var(--clr-warning)';
            total++;
            totalGuesses.textContent = total;
          } else {
            // If guess is high do this:
            clue.textContent = 'High';
            clue.style.color = 'var(--clr-info)';
            total++;
            totalGuesses.textContent = total;
          }
        } else {
          promptMessage('#67b8c7','You already tried that number, guess again!');
        }
      }
    } else {
      promptMessage('#c76767','You must enter a value between 0-100');
    }

    guess.value = '';
  }
})