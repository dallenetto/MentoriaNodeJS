function criaMultiplicador(multiplicador){
    return function(valor) {
        return valor * multiplicador;
    };
}
const duPlica = criaMultiplicador(2);
const triPlica = criaMultiplicador(3);
const quadPlica = criaMultiplicador(4);
const dezPlica = criaMultiplicador(10);

console.log(duPlica(2));
console.log(triPlica(2));
console.log(quadPlica(2));
console.log(dezPlica(2));
