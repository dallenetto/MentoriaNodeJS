//For in retorna o indice / For of retorna o valor
const pessoa = {
    nome: 'Maria',
    idade: 30
};

for (let key in pessoa){
    console.log(key, pessoa[key]);
}


const frutas = ['Uva', 'Banana', 'Maçã'];

for ( let index in frutas){
    console.log(frutas[index]);
}

console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');

for (let valor of frutas){
    console.log(valor);
}
//For in retorna o indice / For of retorna o valor