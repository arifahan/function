const normalPerson = {
    firstName: "Ramim",
    lastName: "Uddin",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName + this.lastName);
    },
    chargeBill: function(amount, tax, vat){
        this.salary = this.salary - amount -tax - vat;
        return this.salary;
    }
}

const heroPerson = {
    firstName: "Hero",
    lastName: "Balam",
    salary: 35000
}
const friendlyPerson = {
    firstName: "Nayok",
    lastName: "Jsim",
    salary: 45000
}
const moodyPerson = {
    firstName: "Ananta",
    lastName: "Jalil",
    salary: 55000
}

normalPerson.chargeBill.apply(heroPerson, [11000, 1, 3]);
console.log("Start With: 23.03", heroPerson.salary);
console.log();


// normalPerson.chargeBill.call(heroPerson, 11000, 1, 3);
// console.log("Start With: 23.03", heroPerson.salary);
// console.log();



// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// normalPerson.chargeBill()
// heroBillCharge(5000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);



// normalPerson.chargeBill(150);
// normalPerson.chargeBill(1000)
// console.log(normalPerson.salary);