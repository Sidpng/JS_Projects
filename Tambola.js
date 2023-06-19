var randomNumber1 = Math.floor(Math.random() * 100);
var firstRowOfFirstTicket = [randomNumber1``, 0, randomNumber, 0, 0];
var secondRowOfFirstTicket = [0, 0, randomNumber, 0, randomNumber];
var thirdRowOfFirstTicket = [0, randomNumber, randomNumber, randomNumber, 0];
var firstRowOfSecondTicket = [0, randomNumber, randomNumber, randomNumber, 0];
var secondRowOfSecondTicket = [0, 0, randomNumber, 0, randomNumber];
var thirdRowOfSecondTicket = [randomNumber, 0, randomNumber, 0, 0];

var cornerFirstTicket;
var cornerSecondTicket;

var fullHouseFirstTicket;
var fullHouseSecondTicket;

//console.log(points);

var generatedNumbers = [];
while (generatedNumbers.length < 100) {
    var r = Math.floor(Math.random() * 100) + 1;
    if (generatedNumbers.indexOf(r) === -1) generatedNumbers.push(r);
}

console.log(generatedNumbers);
console.log(firstRowOfFirstTicket);
console.log(secondRowOfFirstTicket);
console.log(thirdRowOfFirstTicket);
console.log(firstRowOfSecondTicket);
console.log(secondRowOfSecondTicket);
console.log(thirdRowOfSecondTicket);