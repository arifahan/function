function explain_callback(name, age, task){
    console.log('Hello ', name);
    console.log('Your age ', age);
    task();
}

function washHand(){
    console.log('Wash hand with soap');
}
function takeShower(){
    console.log('Take Shower');
}
function corentTopic(){
    console.log('Start from 19.3');
}
explain_callback('kabir uddin', 45, washHand);
explain_callback('Jagir  uddin', 45, takeShower);
explain_callback('Mogir  uddin', 45, corentTopic);
