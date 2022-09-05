"use strict";
//~ Create a function that randomizes the computer's choice from a given list of items.
const list = ["rock", "paper", "scissors"];

function getComputerChoice() {
	let num = Math.floor(Math.random()*3);
	return list[num];
}

//~ Create a function that takes in the user input and stores in a variable. Also create a variable that starts the count and set it to increase by one for each count.

const prompt = require("prompt-sync")({sigint:true});

function getUserInput() {
	let userChoice = prompt("Choose your weapon (Type in ROCK/PAPER/SCISSORS): ", '');
	let modUserChoice = userChoice.toLowerCase();
	if (modUserChoice === list[0] || modUserChoice === list[1] || modUserChoice === list[2] ) {
		return modUserChoice;	
	} else {
		console.log("Wrong Entry! Please try again.");
	}
}

//~ Create a function that compares the user's result with the computer's result and prints out who won. 

function gameplay() {
	for(let compCount = 0, youCount = 0; compCount < 5 && youCount < 5 ;) {
		let You = getUserInput();
		let Computer = getComputerChoice();
		if (You === Computer) {
			console.log("It is a tie!");
			console.log(`Computer: ${compCount}`);
			console.log(`You: ${youCount}`);
		} else {
			if (You == "rock" && Computer == "paper") {
				console.log("You lose! Paper beats Rock.");
				console.log(`Computer: ${compCount+=1}`);
				console.log(`You: ${youCount}`);
			} else if (You == "paper" && Computer == "rock") {
				console.log("You win! Paper beats Rock.");
				console.log(`Computer: ${compCount}`);
				console.log(`You: ${youCount+=1}`);
			}
			if (You == "paper" && Computer == "scissors") {
				console.log("You lose! Scissors beat Paper.");
				console.log(`Computer: ${compCount+=1}`);
				console.log(`You: ${youCount}`);
			} else if (You == "scissors" && Computer == "paper") {
				console.log("You win! Scissors beat Paper.");
				console.log(`Computer: ${compCount}`);
				console.log(`You: ${youCount+=1}`);
			}
			if (You == "scissors" && Computer == "rock") {
				console.log("You lose! Rock beats Scissors.");
				console.log(`Computer: ${compCount+=1}`);
				console.log(`You: ${youCount}`);
			} else if (You == "rock" && Computer == "scissors") {
				console.log("You win! Rock beats Scissors.");
				console.log(`Computer: ${compCount}`);
				console.log(`You: ${youCount+=1}`);
			}
		}
		if (compCount == 5) {
		console.log("Sorry! Computer is the Winner!!!");
		} else if (youCount == 5) {
		console.log("Hurray! You are the Winner!");
		}
	}
	
}

gameplay();
