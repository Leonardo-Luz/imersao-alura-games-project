const numToArray = (num) => {
	const temp = []

	for (let i = 0; i < num; i++) {
		temp.push(i + 1)
	}

	return temp
}

const startTest = (testSize, floorQty, won) => {
	if (won) {
		alert("YOU WON")
		return
	}

	const wrongFloor = Math.floor(Math.random() * 3) + 1

	const floors = numToArray(floorQty)

	const choice = parseInt(prompt(`Round: ${testSize}\nChoose a floor: ${floors.toString()}`))

	if (isNaN(choice) || choice < 1 || choice > floorQty) {
		alert("Invalid Choice")
		return startTest(testSize, floorQty, false)
	}

	if (choice === wrongFloor) {
		alert(`Wrong Floor,\nYou LOST!\nFailed on round: ${testSize}`)
		return;
	}
	else {
		alert(`You Choosed the Right Floor!\nWrong floor was: ${wrongFloor}`)
		startTest(testSize - 1, testSize == 2 ? floorQty - 1 : floorQty, testSize == 1)
	}
}

const clickHandler = (testSize) => {
	startTest(testSize, 3, false)
}
