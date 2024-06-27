const people = [
{ name: 'Maria', age: 16},
{ name: 'Joao', age: 48},
{ name: 'Pedro', age: 15},
{ name: 'Marta', age: 31},
];

let adults = people.reduce ( (acc, curr)=> {
    if (curr.age >= 18) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log(adults);