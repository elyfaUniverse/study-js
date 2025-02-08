class Calculator {
	constructor(resultId, operation) {
		this.num1Input = document.getElementById('num_1')
		this.num2Input = document.getElementById('num_2')
		this.resultElement = document.getElementById(resultId)
		this.operation = operation
	}

	calculate() {
		const num1 = parseInt(this.num1Input.value)
		const num2 = parseInt(this.num2Input.value)

		if (isNaN(num1) || isNaN(num2)) {
			this.resultElement.textContent = 'Ошибка: Введите числа'
			return
		}

		const result = this.operation(num1, num2)
		this.resultElement.textContent = 'Result: ' + result
	}
}

const add = (a, b) => a + b
const multiply = (a, b) => a * b

const additionCalculator = new Calculator('result_1', add)
const multiplyCalculator = new Calculator('result_2', multiply)

document
	.getElementById('btn_add')
	.addEventListener('click', () => additionCalculator.calculate())
document
	.getElementById('btn_multiply')
	.addEventListener('click', () => multiplyCalculator.calculate())
// Reset functionality
const resetButton = document.getElementById('btn_reset')
resetButton.addEventListener('click', () => {
	document.getElementById('num_1').value = 0
	document.getElementById('num_2').value = 0
	document.getElementById('result_1').textContent = 'Result:'
	document.getElementById('result_2').textContent = 'Result:'
})
/*let calculator = {
	add: function (a, b) {
		return a + b
	},
	multiply: function (a, b) {
		return a * b
	},
}
//add
const button_add = document.getElementById('btn_add')
const calck_Add = function () {
	const num_1 = parseInt(document.getElementById('num_1').value)
	const num_2 = parseInt(document.getElementById('num_2').value)

	const sum = calculator.add(num_1, num_2)
	document.getElementById('result_1').textContent = sum
}
button_add.addEventListener('click', calck_Add)

//multiply
const button_multiply = document.getElementById('btn_multiply')
const calck_Multiply = function () {
	const num_1 = parseInt(document.getElementById('num_1').value)
	const num_2 = parseInt(document.getElementById('num_2').value)
	const multiply = calculator.multiply(num_1, num_2)
	document.getElementById('result_2').textContent = multiply
}
button_multiply.addEventListener('click', calck_Multiply)*/
