const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let currentValue = 1;
    return {
      next() {
        // nextの中では返す値(value)と次で終わりかどうかを示すプロパティ(done)を返す
        if (max < currentValue) return {done: true};
        return {
          done : false,
          value : (() => {
            let ret = ''+currentValue;
            if((currentValue % 15)===0){
              ret = 'FizzBuzz';
            } else if((currentValue % 5)===0) {
              ret = 'Buzz';
            } else if((currentValue % 3)===0) {
              ret = 'Fizz';
            }
            currentValue++;
            return ret;
          })()
        };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}