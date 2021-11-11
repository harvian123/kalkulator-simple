const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('.all-clear')
const zeros = document.querySelector('.zero')
const equal = document.querySelector('.equal')
const decimals = document.querySelector('.decimal')
const updateDisplay = document.querySelector('.calculator-display')

let currNumber = `${updateDisplay.value}`
let prevNumber = ''
let resultOperator = ''

const updateScreen = (number)=>{
    updateDisplay.value = number
}

const inputNumber = (number)=>{
    if(currNumber === '0'){
        currNumber = number
    }
    else{
        currNumber += number
    }
}

const inputOperator = (operator)=>{
    prevNumber = currNumber
    resultOperator = operator
    currNumber = ''
}

const calculate = () =>{
    let result = ''
    switch(resultOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currNumber)
            break
        case 'x':
            result = parseFloat(prevNumber) * parseFloat(currNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currNumber)
            break
        default:
            break
    }
    currNumber = result
    resultOperator = ''
}

const clearAll = ()=>{
    currNumber = '0'
    prevNumber = ''
    resultOperator = ''
}

const inputDecimal = (dot)=>{
    if(currNumber.includes('.')){
        return
    }
    currNumber+= dot
}

numbers.forEach((number)=>{
    number.addEventListener('click', (event)=>{
        inputNumber(event.target.value)
        updateScreen(currNumber)
    })
})

operators.forEach((operator)=>{
    operator.addEventListener('click', (event)=>{
        inputOperator(event.target.value)
    })
})

equal.addEventListener('click', ()=>{
    calculate()
    updateScreen(currNumber)
})

clear.addEventListener('click', ()=>{
    clearAll()
    updateScreen(currNumber)
})

decimals.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currNumber)
})