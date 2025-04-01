const WONSTOBRL = 0.00389689
const BRLTOWONS = 256.615

const EUROSTOBRL = 6.19953
const BRLTOEUROS = 0.161253

const DOLLARSTOBRL = 5.74467
const BRLTODOLLARS = 0.174106

const currencyParser = (qtyCurrency, parser) => {
	if (isNaN(qtyCurrency))
		return null
	else
		return qtyCurrency * parser
}

const promptParse = (currency, parser) => {
	const qtyCurrency = prompt(`Digite um valor em ${currency}:`)

	const parsedQtyCurrency = currencyParser(parseInt(qtyCurrency), parser)

	return parsedQtyCurrency
}

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'BRL',
});

const clickHandler = (currency, parser) => {
	const qty = promptParse(currency, parser)

	if (qty == null) {
		alert("Invalid value")
	}
	else {
		printBRL(qty)
	}
}

const printBRL = (brl) => {
	alert(formatter.format(brl))
}
