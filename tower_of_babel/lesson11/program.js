var inputs = process.argv.slice(2);
var result = inputs.map((x) => { 
  return x.slice(0,1);  
}).reduce((previousValue, currentValue, index, array) => {
  return previousValue + currentValue;
});
console.log(result);
