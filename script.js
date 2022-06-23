//A little brief about the program
alert("This is a simple calculator program that does addition, subtraction, multiplication and division");

//prompting for input and storing them in a variable
const num1 = parseInt(prompt("Input the first number"));
const num2 = parseInt(prompt("Input the second number"));
const operator = prompt("Input any of the operator symbol (+, -, *, /)");


//checking to see if a number is inputed
if (!isNaN(num1) && !isNaN(num2)) {
    //checking to see if a valid operator was inputed
    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        //if statements to carry out the operations depending on the operator given
        if (operator === '+') {
            const answer = num1 + num2;
            alert(`${num1}${operator}${num2} = ${answer}`)
        } else if (operator === '-') {
            const answer = num1 - num2;
            alert(`${num1}${operator}${num2} = ${answer}`)
        } else if (operator === '*') {
            const answer = num1 * num2;
            alert(`${num1}${operator}${num2} = ${answer}`)
        } else if (operator === '/') {
            const answer = num1 / num2;
            alert(`${num1}${operator}${num2} = ${answer}`)
        }
        //error message for wrong operator input
    } else { alert("You did not input a valid operator, reload to try again") }

    //error message for not a nummber input 
} else { alert("You did not input a number, reload to try again") }