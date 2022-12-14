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
	let userChoice = prompt("Choose your weapon (Type rock/paper/scissors): ", '');
	let modUserChoice = userChoice.toLowerCase();
	if (modUserChoice === list[0] || modUserChoice === list[1] || modUserChoice === list[2] ) {
		return modUserChoice;	
	} else {
		console.log("\nNo such weapon in the suitcase!\n");
	}
}

//~ Create a function that compares the user's result with the computer's result and prints out who won. 

function startGameplay() {
	for(let compCount = 0, youCount = 0; compCount < 5 && youCount < 5 ;) {
		let You = getUserInput();
		let Computer = getComputerChoice();
		if (You === Computer) {
			console.log(`\n\tThe Computer chose ${Computer.toUpperCase()}`);
			console.log("\n\tIt is a tie!");
			console.log(`\tComputer: ${compCount}`);
			console.log(`\tYou: ${youCount}\n`);
		} else {
			if (You == "rock" && Computer == "paper") {
				console.log(`\n\tThe Computer chose ${Computer.toUpperCase()}`);
				console.log("\n\tYou lose! Paper beats Rock.");
				console.log(`\tComputer: ${compCount+=1}`);
				console.log(`\tYou: ${youCount}\n`);
			} else if (You == "paper" && Computer == "rock") {
				console.log(`\n\tThe Computer chose ${Computer.toUpperCase()}`);
				console.log("\n\tYou win! Paper beats Rock.");
				console.log(`\tComputer: ${compCount}`);
				console.log(`\tYou: ${youCount+=1}\n`);
			}
			if (You == "paper" && Computer == "scissors") {
				console.log(`\n\tThe Computer chose ${Computer.toUpperCase()}`);
				console.log("\n\tYou lose! Scissors beat Paper.");
				console.log(`\tComputer: ${compCount+=1}`);
				console.log(`\tYou: ${youCount}\n`);
			} else if (You == "scissors" && Computer == "paper") {
				console.log(`\n\tThe Computer chose ${Computer.toUpperCase()}`);
				console.log("\n\tYou win! Scissors beat Paper.");
				console.log(`\tComputer: ${compCount}`);
				console.log(`\tYou: ${youCount+=1}\n`);
			}
			if (You == "scissors" && Computer == "rock") {
				console.log(`\n\tThe Computer chose ${Computer.toUpperCase()}`);
				console.log("\n\tYou lose! Rock beats Scissors.");
				console.log(`\tComputer: ${compCount+=1}`);
				console.log(`\tYou: ${youCount}\n`);
			} else if (You == "rock" && Computer == "scissors") {
				console.log(`\n\tThe Computer chose ${Computer.toUpperCase()}`);
				console.log("\n\tYou win! Rock beats Scissors.");
				console.log(`\tComputer: ${compCount}`);
				console.log(`\tYou: ${youCount+=1}\n`);
			}
		}
		if (compCount == 5) {
		console.log("\n\t\t ***** Sorry! Computer is the Winner!!! ***** \n");
		} else if (youCount == 5) {
		console.log("\n\t\t ***** Hurray! You are the Winner! ***** \n");
		}
	}
	
}

console.log("\n******************** ROCK PAPER SCISSORS ********************\n")
startGameplay();
