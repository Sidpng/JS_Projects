// comparing bmi of Mark and John

weightMark = 55;
weightJohn = 60;

heightMark = 5.5;
heightJohn = 6;

let markHigherBMI = true;

bmiMark = weightMark/heightMark;
bmiJohn = weightJohn/heightJohn;

if (bmiMark > bmiJohn) {
    markHigherBMI = true;
}
else if (bmiMark < bmiJohn) {
    markHigherBMI = false;
}

alert(markHigherBMI);