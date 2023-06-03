const yearsOfBirth = [1994, 1998, 1996, 2000];
console.log("Calculating age");
function calcAge() {
    for (var i = 0; i < yearsOfBirth.length; i++) {
        console.log("Age of the individual is: " + (2023 - yearsOfBirth[i]));
    }
}
calcAge();