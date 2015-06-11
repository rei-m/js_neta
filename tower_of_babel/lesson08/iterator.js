// 1000までの値を返すfibonacciを作る
var fibonacci = {
  // Symbol.iteratorを持つメソッドを持つオブジェクトにする
  [Symbol.iterator]() {
    let currentValue = 0, nextValue = 1;
    // iteratorオブジェクトはnextメソッドを持つオブジェクトを返す.
    return {
      next() {
        // nextの中では返す値(value)と次で終わりかどうかを示すプロパティ(done)を返す
        if (nextValue > 1000) return {done: true};
        [currentValue, nextValue] = [nextValue, currentValue + nextValue];
        return {done : false, value : currentValue};
      }
    }
  }
};

for (var n of fibonacci) {
  console.log(n);
}