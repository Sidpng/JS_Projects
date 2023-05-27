let totalBill = parseInt(prompt("Enter the total bill"));
50 < totalBill < 300 ? tipPercentage = 0.15 : tipPercentage = 0.20;
let tip = totalBill * tipPercentage;
let finalAmount = totalBill + tip;
alert(finalAmount);