import * as readlineSync from 'readline-sync';

class NumberGuessingGame {
  private secretNumber: number;
  private attempts: number;
  private maxAttempts: number;

  constructor() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    this.attempts = 0;
    this.maxAttempts = 10; // Set maximum attempts
  }

  startGame() {
    console.log("Welcome to the Number Guessing Game!");
    console.log("I've picked a random number between 1 and 100. Try to guess it!");
    console.log(`You have ${this.maxAttempts} attempts.`);

    while (this.attempts < this.maxAttempts) {
      const remainingAttempts = this.maxAttempts - this.attempts;
      const guess = parseInt(readlineSync.question(`Attempt ${this.attempts + 1}: Enter your guess (1-100): `));

      if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Invalid guess. Please enter a number between 1 and 100.");
        continue;
      }

      this.attempts++;

      if (guess === this.secretNumber) {
        console.log(`Congratulations! You've guessed the number ${this.secretNumber} correctly in ${this.attempts} attempts!`);
        break;
      } else if (guess < this.secretNumber) {
        console.log(`Too low! ${remainingAttempts} attempts remaining.`);
      } else {
        console.log(`Too high! ${remainingAttempts} attempts remaining.`);
      }
    }

    if (this.attempts >= this.maxAttempts) {
      console.log(`Sorry, you've run out of attempts! The correct number was ${this.secretNumber}.`);
    }
  }

  playAgain() {
    const playAgain = readlineSync.keyInYNStrict("Do you want to play again?");
    if (playAgain) {
      this.secretNumber = Math.floor(Math.random() * 100) + 1;
      this.attempts = 0;
      console.log("\nLet's play again!");
      this.startGame();
    } else {
      console.log("Thank you for playing. Goodbye!");
    }
  }
}

const game = new NumberGuessingGame();
game.startGame();
game.playAgain();
