/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}


function addNumbers() {

  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);

  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

  

/* Function Expression - Subtract Numbers */


function subtract(number1, number2) {
  return number1 - number2;
}


function subtractNumber() {

  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);


  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}


document.querySelector('#subtractNumbers').addEventListener('click', subtractNumber);


/* Arrow Function - Multiply Numbers */


function multiply(number1, number2) {
  return number1 * number2;
}


function multiplyNumbers() {

  let multiplyNumber1 = Number(document.querySelector('#factor1').value);
  let multiplyNumber2 = Number(document.querySelector('#factor2').value);


  document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}


document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */


function divide(number1, number2) {
  if (number2 === 0) {
    return "No se puede dividir por cero";
  }
  return number1 / number2;
}


function divideNumbers() {

  let divideNumber1 = Number(document.querySelector('#dividend').value);
  let divideNumber2 = Number(document.querySelector('#divisor').value);


  const result = divide(divideNumber1, divideNumber2);
  
  if (typeof result === 'number') {
    document.querySelector('#quotient').value = result;
  } else {

    document.querySelector('#quotient').value = result;
  }
}


document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

const currentDate = new Date();


const currentYear = currentDate.getFullYear();


document.querySelector('#year').value = currentYear;


let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
document.querySelector('#array').textContent = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);