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

console.log(getComputerChoice());

function getHumanChoice() {
	let playerChoice = null;

	while (!playerChoice) {
		let lowerCaseUserInput = prompt(
			"Please enter your choice(rock/paper/scissors):"
		).toLowerCase();

		switch (lowerCaseUserInput) {
			case "rock":
			case "paper":
			case "scissors":
				playerChoice = lowerCaseUserInput;
			default:
				continue;
		}
	}
	return playerChoice;
}


console.log(getHumanChoice());