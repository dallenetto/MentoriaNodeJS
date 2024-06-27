function soma() {
    const args = Array.prototype.slice.call(arguments);
    return args.reduce( (a,b) => a + b );
}

console.log('soma: ' + soma(1,2,3));

const someArrow = (...args) => args.reduce( (a,b) => a + b );
console.log('someArrow: ' + someArrow(1,2,3));