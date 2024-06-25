const evenNumbers = [2,4,6,8,10];
evenNumbers.forEach((number)=> {
    console.log(number);
});

console.log('-----------------------------------------------------------------------------------------');

{
    const oddNumbers = [1,3,5,7,9];
    oddNumbersPlusTwo = oddNumbers.forEach(
        (number)=> { console.log(number+2) }
    );
    
    console.log('-----------------------------------------------------------------------------------------');

    const others = [];
    oddNumbers.forEach( 
        (number)=> { others.push(number+10) }
    );
    others.forEach(
        (x)=> (console.log(x))
    );

}