class Person {
	constructor(resultElementId) {
		this.nameInput = document.getElementById('input_name')
		this.lastNameInput = document.getElementById('input_lastname')
		this.ageInput = document.getElementById('input_age')
		this.resultElement = document.getElementById(resultElementId)
	}
	information() {
		const name = this.nameInput.value
		const lastName = this.lastNameInput.value
		const age = parseInt(this.ageInput.value)
		const res = `${name} ${lastName} ${age}`
		this.resultElement.textContent = res
		console.log(res)
	}
}
const person = new Person('result')

function result() {
	person.information()
}
document.getElementById('btn_person').addEventListener('click', result)
