const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

for (var i = 0; i < bills.length; i++) {
    if (50 < bills[i] > 200) {
        tips[i] = bills[i] * 0.15;
    } else {
        tips[i] = bills[i] * 0.2;
    }
    total[i] = bills[i] + tips[i];
}
console.log(total);
