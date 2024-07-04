function soma(a, b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        //throw error('a e b precisam ser nros');  //não exibe stacktrace
        // ou 
        throw new Error('a e b precisam ser nros');
    }
    return a+b;
}

try{
    console.log( soma(2, '5'));
} catch( error ){
    //console.log(error);
    // ou mostra algo mais amigável
    console.log('a e b precisam ser numeros');
} finally {
    console.log('Finalizando');
}