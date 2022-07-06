// comece a criar a sua função add na linha abaixo

function add(x, y){

    return x + y;
}
console.log(add(3,5))

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply(x,y){

    let multiplicacao = 0;

    for(let i = 0; i < y; i++){
        multiplicacao = add(x, multiplicacao)
    }
    return multiplicacao;

}
console.log(multiply(4,6))

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(x,n){

    let potencia = 1;

    for(let i = 0; i < n; i++){
        potencia = multiply(x, potencia)
    }
    return potencia;
}
console.log(power(3,4))

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factor(x){

    let fatorial = x;

    for(let i = x-1; i > 0 ; i--){
        fatorial = multiply(i, fatorial)
    }   
    return fatorial;
}

console.assert(factorial(5))==120

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

/*
Sequência de Fibonacci
A sucessão de Fibonacci é uma sequência de números inteiros iniciados por zero e um, no qual cada termo subsequente corresponde a soma dos dois números anteriores: 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584...
*/
function fibonacci(x){
    
    let arrayFibonacci = [0,1];

    let valorAnterior = 0;
    let valorAtual = 1;
    let proximoValor = 0;

    if(i = 2; i <= x; i++){

        proximoValor = add(valorAnterior, valorAtual);

        valorAnterior = valorAtual;

        valorAtual = proximoValor;

        arrayFibonacci.push(proximoValor);
    }
    return arrayFibonacci[x];
}

console.log(fibonacci(7))

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
