// comparing bmi of Mark and John

const weightMark = 150;
const weightJohn = 60;

const heightMark = 5;
const heightJohn = 4;

let markHigherBMI;

const bmiMark = (weightMark/heightMark).toPrecision(2);
const bmiJohn = (weightJohn/heightJohn).toPrecision(2);

if (bmiMark > bmiJohn) {
    markHigherBMI = true;
}
else if (bmiMark < bmiJohn) {
    markHigherBMI = false;
}
else {
    alert("equal bmi");
}

alert(markHigherBMI);