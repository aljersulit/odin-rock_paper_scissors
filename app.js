function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3) + 1;
	switch (randomNumber) {
		case 1:
			return "Rock";
		case 2:
			return "Paper";
		case 3:
			return "Scissors";
		default:
			return "Something went wrong";
	}
}

console.log(getComputerChoice());

