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
	// Wrapped in the while loop to prompt the user again whenever they typed an invalid input
	while (true) {
		// Get the user input
		let userInput = prompt(
			"Please enter your choice(rock/paper/scissors):"
		);
		// Make the user input case insensitive by forcing it to be lowercased to match the cases
		let lowerCaseUserInput = "";
		if (userInput) {
			lowerCaseUserInput = userInput.toLowerCase();
		}

		// If the user clicks the cancel button on the prompt
		if (userInput === null) {
			return "cancel";
		}

		switch (lowerCaseUserInput) {
			case "rock":
			case "paper":
			case "scissors":
				return lowerCaseUserInput;
			default:
				alert("Wrong input");
				continue;
		}
	}
}

function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

function playRound() {
	let humanChoice = "";
	let computerChoice = "";
	let isDraw = true;
	let winner = "";

	while (isDraw) {
		humanChoice = getHumanChoice();
		computerChoice = getComputerChoice();

		if (humanChoice === "cancel") {
			return "stop";
		}

		if (humanChoice === computerChoice) {
			alert("It's a draw, try again");
			continue;
		} else if (
			(humanChoice === "rock" && computerChoice === "paper") ||
			(humanChoice === "paper" && computerChoice === "scissors") ||
			(humanChoice === "scissors" && computerChoice === "rock")
		) {
			winner = "computer";
			isDraw = false;
			console.log(
				`You lose! ${capitalize(computerChoice)} beats ${capitalize(
					humanChoice
				)}`
			);
		} else {
			winner = "human";
			isDraw = false;
			console.log(
				`You win! ${capitalize(humanChoice)} beats ${capitalize(
					computerChoice
				)}`
			);
		}
	}
	return winner;
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	const rounds = 5;

	for (let round = 1; round <= rounds; round++) {
		console.log(`Round: ${round}`);
		let roundResult = playRound();
		if (roundResult === "stop") {
			return "Player stopped the game";
		} else {
			if (roundResult === "computer") {
				computerScore++;
			} else if (roundResult === "human") {
				humanScore++;
			}
			console.log("Player score: ", humanScore);
			console.log("Computer score:", computerScore);
		}
	}

	if (humanScore > computerScore) {
		return "You won. Congratulations!";
	} else {
		return "You lose. Don't give up and try again";
	}

}