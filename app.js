let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3) + 1;
	switch (randomNumber) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
		default:
			return "Something went wrong";
	}
}

function getHumanChoice() {
	while (true) {
		let userInput = prompt(
			"Please enter your choice(rock/paper/scissors):"
		);
		let lowerCaseUserInput = "";
		if (userInput) {
			lowerCaseUserInput = userInput.toLowerCase();
		}

		switch (lowerCaseUserInput) {
			case "rock":
			case "paper":
			case "scissors":
				return lowerCaseUserInput;
			default:
				continue;
		}
	}
}
function playRound() {
	const playerChoice = getHumanChoice();
	const computerChoice = getComputerChoice();

	if (
		(playerChoice === "rock" && computerChoice === "paper") ||
		(playerChoice === "paper" && computerChoice === "scissors") ||
		(playerChoice === "scissors" && computerChoice === "rock")
	) {
		computerScore++;
		console.log(
			`You lose! ${
				computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
			} beats ${
				playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
			}`
		);
	} else {
		humanScore++;
		console.log(
			`You win! ${
				playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
			} beats ${
				computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
			}`
		);
	}
}

playRound();

