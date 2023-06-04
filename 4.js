const jonas = {
    firstName: 'Johnas',
    lastName: 'Nick',
    hasDriverLicense: false,
    age: 24,
    aboutJonas: function () {
        if (this.hasDriverLicense) {
            console.log(`${this.firstName} ${this.lastName}` + " has driver license");
        }
        else {
            console.log(`${this.firstName} ${this.lastName}` + " doesnt have a driver license");
        }
    }
};

jonas.aboutJonas();