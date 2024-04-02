"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var NumberGuessingGame = /** @class */ (function () {
    function NumberGuessingGame() {
        this.secretNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
        this.attempts = 0;
        this.maxAttempts = 10; // Set maximum attempts
    }
    NumberGuessingGame.prototype.startGame = function () {
        console.log("Welcome to the Number Guessing Game!");
        console.log("I've picked a random number between 1 and 100. Try to guess it!");
        console.log("You have ".concat(this.maxAttempts, " attempts."));
        while (this.attempts < this.maxAttempts) {
            var remainingAttempts = this.maxAttempts - this.attempts;
            var guess = parseInt(readlineSync.question("Attempt ".concat(this.attempts + 1, ": Enter your guess (1-100): ")));
            if (isNaN(guess) || guess < 1 || guess > 100) {
                console.log("Invalid guess. Please enter a number between 1 and 100.");
                continue;
            }
            this.attempts++;
            if (guess === this.secretNumber) {
                console.log("Congratulations! You've guessed the number ".concat(this.secretNumber, " correctly in ").concat(this.attempts, " attempts!"));
                break;
            }
            else if (guess < this.secretNumber) {
                console.log("Too low! ".concat(remainingAttempts, " attempts remaining."));
            }
            else {
                console.log("Too high! ".concat(remainingAttempts, " attempts remaining."));
            }
        }
        if (this.attempts >= this.maxAttempts) {
            console.log("Sorry, you've run out of attempts! The correct number was ".concat(this.secretNumber, "."));
        }
    };
    NumberGuessingGame.prototype.playAgain = function () {
        var playAgain = readlineSync.keyInYNStrict("Do you want to play again?");
        if (playAgain) {
            this.secretNumber = Math.floor(Math.random() * 100) + 1;
            this.attempts = 0;
            console.log("\nLet's play again!");
            this.startGame();
        }
        else {
            console.log("Thank you for playing. Goodbye!");
        }
    };
    return NumberGuessingGame;
}());
var game = new NumberGuessingGame();
game.startGame();
game.playAgain();
