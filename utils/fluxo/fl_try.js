try {
    const json = '{ "nome": "Maria", "idade": "15"}';
    const user = JSON.parse(json);
    console.log(user.nome);
    if (user.idade < 18) {
        throw new Error('Usuario menor de idade');
      }
    const err = JSON.parse(jsonx);
} catch(e) {
    console.log('Error: ' + e.message);
} finally {
    console.log('Finaliza');
}