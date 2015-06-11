const max = process.argv[2];
let FizzBuzz = function*(){
  let currentValue = 1;
  while (currentValue <= max){
    let ret = ''+currentValue;
    if((currentValue % 15)===0){
      ret = 'FizzBuzz';
    } else if((currentValue % 5)===0) {
      ret = 'Buzz';
    } else if((currentValue % 3)===0) {
      ret = 'Fizz';
    }
    currentValue++;
    yield ret;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}
