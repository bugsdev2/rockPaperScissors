
function random(num){
	return Math.floor(Math.random()*num);
}
const items = ['rock', 'paper','scissors']
let compCount = 0, youCount = 0;

const options = document.querySelectorAll('.option-window img')

const compPlayArea = document.querySelector('.play-area.computer')
const userPlayArea = document.querySelector('.play-area.user')

const userTableData = document.querySelector('#user');
const compTableData = document.querySelector('#comp');

const h3 = document.querySelector('.table h3');

options.forEach(option => option.addEventListener('click', startGameplay))

function startGameplay(e) {
	if (youCount == 5 || compCount == 5) {
		if (confirm('Do you want to start a new game?')) {
			youCount=0; 
			compCount = 0;
			userTableData.textContent = youCount;
			compTableData.textContent = compCount;
			h3.textContent = '';
		};
	} else {
		const userChoice = e.target.getAttribute('data-id');
		let computerChoice = items[random(3)];
		let loser = '';
		
		const imgUser = document.createElement('img');
		imgUser.setAttribute('src', `assets/images/${userChoice}.png`);
		
		const imgComp = document.createElement('img');
		imgComp.setAttribute('src', `assets/images/${computerChoice}.png`);
		
		const imgCross = document.createElement('img');
		
		
		userPlayArea.replaceChild(imgUser, userPlayArea.firstElementChild);
		compPlayArea.replaceChild(imgComp, compPlayArea.firstElementChild);
		
			if (userChoice === computerChoice) {
				h3.textContent = "It's a tie!";
			} else {
				if (userChoice == "rock" && computerChoice == "paper") {
					h3.textContent = "You lose!";
					loser = userChoice;
					imgCross.setAttribute('src', `assets/images/${loser}Cross.png`);
					userPlayArea.replaceChild(imgCross, userPlayArea.firstElementChild);
					compCount+=1;
				} else if (userChoice == "paper" && computerChoice == "rock") {
					h3.textContent = "You win!";
					loser = computerChoice;
					imgCross.setAttribute('src', `assets/images/${loser}Cross.png`);
					compPlayArea.replaceChild(imgCross, compPlayArea.firstElementChild);
					youCount+=1;
				}
				if (userChoice == "paper" && computerChoice == "scissors") {
					h3.textContent = "You lose!";
					loser = userChoice;
					imgCross.setAttribute('src', `assets/images/${loser}Cross.png`);
					userPlayArea.replaceChild(imgCross, userPlayArea.firstElementChild);
					compCount+=1;
				} else if (userChoice == "scissors" && computerChoice == "paper") {
					h3.textContent = "You win!";
					loser = computerChoice;
					imgCross.setAttribute('src', `assets/images/${loser}Cross.png`);
					compPlayArea.replaceChild(imgCross, compPlayArea.firstElementChild);
					youCount+=1;
				}
				if (userChoice == "scissors" && computerChoice == "rock") {
					h3.textContent = "You lose!";
					loser = userChoice;
					imgCross.setAttribute('src', `assets/images/${loser}Cross.png`);
					userPlayArea.replaceChild(imgCross, userPlayArea.firstElementChild);
					compCount+=1;
				} else if (userChoice == "rock" && computerChoice == "scissors") {
					h3.textContent = "You win!";
					loser = computerChoice;
					imgCross.setAttribute('src', `assets/images/${loser}Cross.png`);
					compPlayArea.replaceChild(imgCross, compPlayArea.firstElementChild);
					youCount+=1;
				}
			}
			userTableData.textContent = youCount;
			compTableData.textContent = compCount;
	}
	
}






