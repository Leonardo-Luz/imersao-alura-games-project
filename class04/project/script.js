
const Types = {
	WATER: 1,
	FIRE: 2,
	GRASS: 3,
};

const Factions = {
	HERO: 'HERO',
	VILLAIN: 'VILLAIN',
};

const typeToString = (type) => {
	switch (type) {
		case Types.WATER:
			return "Water"
		case Types.FIRE:
			return "Fire"
		case Types.GRASS:
			return "Grass"
		default:
			return "error"
	}
}

const charToString = (char) => {
	return `Name: ${char.name}\nStrength: ${char.strength}\nType: ${typeToString(char.type)}\nFaction: ${char.faction}\n`
}

const newCharacter = (name, strength, type, faction) => {
	if (typeof (name) != "string" || typeof (strength) != "number" || !Object.values(Types).includes(type) || !Object.values(Factions).includes(faction)) {
		return null;
	}

	return {
		name: name,
		strength: strength,
		type: type,
		faction: faction,
	}
}

const calcStrength = (hero, villain) => {
	switch (hero.type) {
		case Types.WATER:
			if (villain.type === Types.FIRE) {
				return Math.floor(hero.strength * 1.5);
			}
			else if (villain.type === Types.GRASS) {
				return Math.floor(hero.strength * 0.5)
			}

			return hero.strength
		case Types.FIRE:
			if (villain.type === Types.GRASS) {
				return Math.floor(hero.strength * 1.5);
			}
			else if (villain.type === Types.WATER) {
				return Math.floor(hero.strength * 0.5)
			}

			return hero.strength
		case Types.GRASS:
			if (villain.type === Types.WATER) {
				return Math.floor(hero.strength * 1.5);
			}
			else if (villain.type === Types.FIRE) {
				return Math.floor(hero.strength * 0.5)
			}

			return hero.strength
		default:
			return hero.strength
	}
}

const checkWinner = (yourTeam, enemyTeam) => {
	let yourTeamStr = 0;
	let enemyTeamStr = 0;

	for (let i = 0; i < yourTeam.length; i++) {
		const heroSTR = calcStrength(yourTeam[i], enemyTeam[i])
		const villainSTR = calcStrength(enemyTeam[i], yourTeam[i])

		alert(`HERO ${yourTeam[i].name} ${typeToString(yourTeam[i].type)}: \nbasic STR: ${yourTeam[i].strength}\ncalculated STR: ${heroSTR}`)
		alert(`VILLAIN ${enemyTeam[i].name} ${typeToString(enemyTeam[i].type)}: \nbasic STR: ${enemyTeam[i].strength}\ncalculated STR: ${villainSTR}`)

		yourTeamStr += heroSTR
		enemyTeamStr += villainSTR
	}

	alert(`Your team STR: ${yourTeamStr}\nEnemy team STR: ${enemyTeamStr}`)

	if (yourTeamStr > enemyTeamStr)
		return 1
	else if (yourTeamStr < enemyTeamStr)
		return 2
	else
		return 0
}

const createVillainTeam = (size) => {
	const names = new Array("Maleficent", "Voldemort", "Cruella de Vil", "Scar", "Hans", "Jafar", "Ursula");
	const team = new Array();

	for (let i = 0; i < size; i++) {
		const randomVillain = Math.floor(Math.random() * names.length)
		const name = names.find((_, index) => index == randomVillain)
		const strength = Math.floor(Math.random() * 89) + 1
		const type = Math.floor(Math.random() * 3) + 1

		const char = newCharacter(name, strength, type, Factions.VILLAIN)
		if (char != null)
			team.push(char)
		else {
			alert("Character creation Error,\nTry again")
			return null
		}
	}

	return team;
}

const createHeroTeam = (size) => {
	const team = new Array();

	for (let i = 0; i < size; i++) {
		const name = prompt(`Digite o nome do Herói ${i + 1}`)
		const strength = Math.floor(Math.random() * 99) + 1
		const type = Math.floor(Math.random() * 3) + 1

		const char = newCharacter(name, strength, type, Factions.HERO)
		if (char != null)
			team.push(char)
		else {
			alert("Character creation Error,\nTry again")
			return null
		}
	}

	return team;
}

const clickHandler = (size) => {
	const yourTeam = createHeroTeam(size);
	const enemyTeam = createVillainTeam(size);

	if (!yourTeam || !enemyTeam) {
		alert("Error creating a team!")
		return
	}

	alert(`Your TEAM:\n${yourTeam.map(hero => "\n" + charToString(hero)).join("\n")}`)
	alert(`Enemy TEAM:\n${enemyTeam.map(villain => "\n" + charToString(villain)).join("\n")}`)

	switch (checkWinner(yourTeam, enemyTeam)) {
		case 1:
			alert("You WON")
			break;
		case 2:
			alert("You LOST")
			break;
		case 0:
			alert("DRAW")
			break;
	}
}
