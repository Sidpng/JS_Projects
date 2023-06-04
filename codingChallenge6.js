/* Write your code below. Good luck! 🙂 */
function calcTip(billValue) {
    if (50 <= billValue <= 300) {
        tipPercent = 0.15;
    }
    else {
        tipPercent = 0.20;
    }
    return tipPercent;
}

const bills = [125, 555, 44];
let tips = [];
let total = [];

for (var i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips[i] = bills[i] * tip; 4
    total[i] = bills[i] + tips[i];
}

console.log(tips);
console.log(total);