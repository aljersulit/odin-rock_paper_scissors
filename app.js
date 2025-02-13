let humanScore = 0;
let computerScore = 0;

const result = document.getElementById("game-result");
const humanScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const buttons = document.querySelectorAll("button.game-btn");
const restart = document.getElementById("restart");

buttons.forEach((button) => {
	button.addEventListener("click", playRound);
});

restart.addEventListener("click", () => {
	humanScore = 0;
	humanScoreDisplay.textContent = humanScore;
	computerScore = 0;
	computerScoreDisplay.textContent = computerScore;
	result.textContent = "";
	buttons.forEach((button) => {
		button.disabled = false;
	});
	restart.style.display = "none";
});

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

function getWinner(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		result.textContent = "It's a tie";
	} else if (
		(humanChoice === "rock" && computerChoice === "paper") ||
		(humanChoice === "paper" && computerChoice === "scissors") ||
		(humanChoice === "scissors" && computerChoice === "rock")
	) {
		result.textContent = "You Lose";
		computerScore++;
		computerScoreDisplay.textContent = computerScore;
	} else {
		result.textContent = "You Win";
		humanScore++;
		humanScoreDisplay.textContent = humanScore;
	}
	isGameOver();
}

function isGameOver() {
	if ((humanScore >= 5) | (computerScore >= 5)) {
		result.textContent =
			humanScore > computerScore ? "You won the game!" : "You lost...";
		buttons.forEach((button) => {
			button.disabled = true;
		});
		restart.style.display = "block";
	}
}

function playRound(event) {
	const humanChoice = event.target.id;
	const computerChoice = getComputerChoice();

	getWinner(humanChoice, computerChoice);
}

