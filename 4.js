const jonas = {
    firstName: 'Johnas',
    lastName: 'Nick',
    hasDriverLicense: false,
    age: 24,
    aboutJonas: function () {
        if (this.hasDriverLicense) {
            console.log(`${this.firstName} ${this.lastName} is a ${this.age} years old, has driver license`);
        }
        else {
            console.log(`${this.firstName} ${this.lastName} is a ${this.age} years old, doesnt have a driver license`);
        }
    }
};

jonas.aboutJonas();