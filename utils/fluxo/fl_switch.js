let opcao = 'Node';
let curso;
switch(opcao){
    case 'Java':
        curso = 'Java';
        break;
    case 'Node':
        curso = 'Node';
        break;
    default:
        curso = 'Padrão';
};
console.log(`Você escolheu o curso: ${curso}`);