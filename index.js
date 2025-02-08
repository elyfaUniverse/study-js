class Calculator {
	constructor(resultId, operation) {
		this.num1Input = document.getElementById('input_1')
		this.num2Input = document.getElementById('input_2')
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
		this.resultElement.textContent = result
	}
}

const add = (a, b) => a + b
const multiply = (a, b) => a * b
const minus = (a, b) => a - b

const additionCalculator = new Calculator('result_add', add)
const multiplyCalculator = new Calculator('result_multiply', multiply)
const minusCalculator = new Calculator('result_minus', minus)
document
	.getElementById('btn_add')
	.addEventListener('click', () => additionCalculator.calculate())
document
	.getElementById('btn_multiply')
	.addEventListener('click', () => multiplyCalculator.calculate())
document
	.getElementById('btn_minus')
	.addEventListener('click', () => minusCalculator.calculate())

// RESET
const resetButton = document.getElementById('btn_reset')
resetButton.addEventListener('click', () => {
	document.getElementById('input_1').value = 0
	document.getElementById('input_2').value = 0
	document.getElementById('result_add').textContent = ''
	document.getElementById('result_multiply').textContent = ''
	document.getElementById('result_minus').textContent = ''
})
/*let calculator = {
	add: function (a, b) {
		return a + b
	},
	multiply: function (a, b) {
		return a * b
	},
	minus:function(a, b){
	    
	    return a-b
	}
}

//RESET
const reset_button=document.getElementById('btn_reset')
reset_button.addEventListener('click',()=>{
    document.getElementById('input_1').value=0
    document.getElementById('input_2').value=0
    document.getElementById('result_add').textContent=''
    document.getElementById('result_multiply').textContent=''
    document.getElementById('result_minus').textContent=''
})






//MINUS
const button_minus=document.getElementById('btn_minus')

const calc_minus=function(){
    const input_1=parseInt(document.getElementById('input_1').value)
    const input_2=parseInt(document.getElementById('input_2').value)
    
    const result_minus=calculator.minus(input_1, input_2)
    
    document.getElementById('result_minus').textContent=result_minus
    }
button_minus.addEventListener('click', calc_minus)



//ADD
const button_add=document.getElementById('btn_add')

const calc_add=function(){
const input_1=parseInt(document.getElementById('input_1').value)
const input_2=parseInt(document.getElementById('input_2').value)

const result_add=calculator.add(input_1, input_2)

document.getElementById('result_add').textContent=result_add
}
button_add.addEventListener('click', calc_add)


//MULTIPLY
 const button_multiply=document.getElementById('btn_multiply')
 
 const calc_multiply=function(){
     
     const input_1=parseInt(document.getElementById('input_2').value)
     const input_2=parseInt(document.getElementById('input_2').value)

     
     const result_multiply=calculator.multiply(input_1, input_2)
     
    document.getElementById('result_multiply').textContent= result_multiply
 }
 
 button_multiply.addEventListener('click', calc_multiply)
*/
