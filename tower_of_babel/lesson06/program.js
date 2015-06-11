'use strict';
// 変数aはblockの中でも外でも再代入可能
var a = 5;

// 変数bは再代入不可能
const b = process.argv[2];

if(a === 5){
  // cは再代入可能だけどスコープはblockの中だけ
  let c = 4;
  console.log(c);

  // 変数bはblockの中でだけ有効
  let b = 8;
  console.log(b);
}

console.log(a);
console.log(b);

try {
  c = 1000;
} catch (e) {
  console.log(e);
}
