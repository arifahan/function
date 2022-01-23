function addNumbers(num1){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

var result = addNumbers(5, 4.5);
console.log('Start from: ' + result);
