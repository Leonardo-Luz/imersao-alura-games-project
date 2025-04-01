const ROCK = 1, PAPER = 2, SCISSOR = 3
const LEGALAGE = 18

const isOfLegalAge = (age) => {
	return age >= LEGALAGE
}

const answerToString = (answer) => {
	switch (answer) {
		case ROCK:
			return "paper"
		case PAPER:
			return "scissors"
		case SCISSOR:
			return "rock"
	}
}

const checkWin = (pcAnswer, userAnswer) => {
	switch (userAnswer) {
		case ROCK:
			return pcAnswer == SCISSOR
		case PAPER:
			return pcAnswer == ROCK
		case SCISSOR:
			return pcAnswer == PAPER
	}
}

const checkDraw = (pcAnswer, userAnswer) => {
	return pcAnswer == userAnswer
}

const clickHandler = (userAnswer) => {
	const age = prompt("What is you age? ")

	const pcAnswer = Math.floor(Math.random() * (4 - 1)) + 1

	if (isOfLegalAge(age)) {
		if (checkWin(pcAnswer, userAnswer))
			alert(`You WON`)
		else if (checkDraw(pcAnswer, userAnswer))
			alert(`DRAW,\nright answer: ${answerToString(pcAnswer)}`)
		else
			alert(`You LOST,\nright answer: ${answerToString(pcAnswer)}`)
	}
	else
		alert(`You has to be older than ${LEGALAGE - 1} to play this game!`)
}
