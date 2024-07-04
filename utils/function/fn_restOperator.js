function conta(operador, acumulador, ...numeros) {//restOp
    for(let nro of numeros){
        if ( operador === '+') acumulador += nro;
        if ( operador === '-') acumulador -= nro;
        if ( operador === '/') acumulador /= nro;
        if ( operador === '*') acumulador *= nro;
    }
    console.log(`Total: ${acumulador}`);
};

conta('+', 500, 10, 20, 30, 40, 50);

//--------------------------
//lembrar que o js aceita passar argumento e não receber nada 0^0

function contaX() {
       console.log(arguments); //dai usa o arguments
       //e ai pode iterar ele como quiser
};
contaX('*', 500, 10, 20, 30, 40, 50);