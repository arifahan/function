class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person("hero", 'balam', 2500)
const friendlyPerson = new Person("hero", 'Falam', 25000);
console.log(heroPerson);
console.log(friendlyPerson);




function Person1(name, age, id){
    this.name = name;
    this.age = age;
    this.id = id;
}
const oldPerson = new Person1("Kalam", 62, 122);
console.log(oldPerson);
