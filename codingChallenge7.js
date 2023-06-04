const john = {
    fullName: 'John Smith',
    mass: 85,
    height: 175,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const mark = {
    fullName: 'Mark Miller',
    mass: 95,
    height: 185,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher the ${mark.fullName}'s BMI ${mark.bmi}!`);
}
else if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher the ${john.fullName}'s BMI ${john.bmi}!`);
}