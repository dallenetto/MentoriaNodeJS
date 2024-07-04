function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {hour12: false});
}

const timer = setInterval( function() {
    console.log(mostraHora());
}, 5000);

setTimeout( function() {
    clearInterval(timer);
}, 20000);

setTimeout(function() {
    console.log('Parou o timer');
}, 22000);