const numbers = [1,2,3,4,5,9,6,8,7];

var max = numbers.reduce( (acc, curr)=> acc > curr ? acc : curr, numbers[0]);
console.log(`Maior valor ${max}`);

var max2 = numbers.reduce( (acc, curr)=> acc > curr ? acc : curr, 0);
console.log(`Maior valor ${max2}`);
