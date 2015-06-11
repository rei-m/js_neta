var args = process.argv[2].split(",");
args = args.map((arg) => +arg);

// ここに平均を取る関数を作る
// RESTパラメータを使用

var avg = (...args) => 
  args.reduce((previousValue, currentValue) => previousValue + currentValue) / args.length;

console.log(avg(...args));
