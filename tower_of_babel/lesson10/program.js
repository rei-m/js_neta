var json = {
  "name" : {
    "first" : "Yousuke",
    "family" : process.argv[2]
  },
  "birth" : {
    "year" : 1982,
    "month" : 12,
    "day" : process.argv[3]
  }
};

var name = json.name;

var {first, family} = name;

console.log(json.name);
console.log(first);

