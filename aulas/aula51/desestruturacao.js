const pessoa = {
    nome: 'leticia',
    sobrenome: 'dalle',
    idade: 42,
    endereco: {
        rua: 'Protasio Alves',
        numero: '1234'
    }
};

const {nomex, idade} = pessoa;
//console.log(nomex, idade);

const {
    endereco: { rua: r, numero: n}, endereco 
}  = pessoa;

//console.log(r, n, endereco);

const {nome, ...resto} = pessoa;

console.log(nome);
console.log(resto);