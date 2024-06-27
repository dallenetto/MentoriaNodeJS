
const pessoa = {
    nome: 'Maria',
    idade: 33,
    notificar: function() {
        const msg = () => {
            console.log(`Olá, ${this.nome} vc recebeu uma notificação!`);
        };
        msg();
    }
};

pessoa.notificar();
