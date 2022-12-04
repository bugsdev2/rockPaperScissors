# ROCK PAPER SCISSORS

Site live at : https://bugsdev2.github.io/rockPaperScissors/

This has been my attempt at rock paper scissors game with a simple UI.


REFLECTIONS: Hmm... It was a good learning experience overall. The replace child feature helped me to put a crossed image over the initial one whenever the PC/user lost a match. 

On comparing my code with other codes I realize that I could have done better with the algorithm. Case in point: Here's a code snippet from "lookingcoolonavespa"

. . . 

  if (computerSelection == playerSelection) {
    displayResults("Tie game!");
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore = ++computerScore;
    . . . 
    . . .
  } else {
    playerScore = ++playerScore;
    
. . . 

This is an interesting use of 'and' and 'or' operators. Note here that they have also used proper formatting. I must get used to both these things when I code.

The same user also made it a habit of dividing the code into multiple functions while mine is one huge monolith of a function. I must learn to allocate only one job to one function.
