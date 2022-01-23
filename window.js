var name = 'Kuddus';

function add (num1, num2){
    var result = num1 + num2;
    console.log("Inside result: ", name);
    return result;
}
console.log("Outside result: ", name)
var sum = add(12, 13);
console.log(sum);