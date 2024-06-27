const numbers = [2,4,6,8,10]

var sum = numbers.reduce( (acc, curr)=> {
    return acc + curr;
}, 0);
console.log(`Soma igual: ${sum}`);

/* const msg = Number.parseInt(sum);
const msg2 = `Soma igual: ${msg}`;
console.log(msg2); */


console.log('-----------------------------------------------------');
