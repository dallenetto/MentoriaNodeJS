function random(min, max){
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}

const min = 1, max = 50;

let rand = random(min, max); // or 0
let qtd = 0;

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
    qtd++;
}
console.log('qtd: '+ qtd);

console.log('*****************************');

do{
    rand = random(min, max);
    console.log(rand);
    qtd++;
} while(rand !== 10);

console.log('qtd2: '+ qtd);