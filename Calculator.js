let number1 = parseInt(prompt("Enter value for first number"));
let number2 = parseInt(prompt("Enter value for second number"));
let operator = prompt("Enter operator");
switch (operator) {
    case "+":
        alert(number1 + number2);
        break;
    case "-":
        alert(number1 - number2);
        break;
    case "*":
        alert(number1 * number2);
        break;
    case "/":
        alert(number1 / number2);
        break;
    case "%":
        calert(number1 % number2);
        break;
    default:
        alert("Invalid operator");
        break;
}