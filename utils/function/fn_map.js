const evenNumbers = [2,4,6,8,10];

let doubleNumbers = evenNumbers.map( (number)=> { return number * 2; } );

evenNumbers.forEach( (n)=> { console.log(n) } );
console.log('-----------------------------------------------------------------------------------------');

doubleNumbers.forEach( (n)=> { console.log(n) } );

