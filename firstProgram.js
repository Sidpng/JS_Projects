let person = {
    age : 20,
    name : {
        firstName : 'John',
        lastName : 'Doe'
    },
    address : {
        city : 'New York',
        state : 'NY'
    }
}
alert(person.age + ' ' + person.name.firstName + ' ' 
+ person.name.lastName + ' ' + person.address.city + ' ' + person.address.state);
