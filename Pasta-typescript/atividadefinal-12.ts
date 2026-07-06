// contagem de 1 a 10.
let i: number = 0
for(let i: number = 1; i <=10;i++){
console.log(i)
}

//Calcular a multiplicação de 1 a 100 com acumulador.
let soma: number = 1;
for(let i: number = 0; i<=100; i++){
if (i % 2 === 1){
    soma *= i;
}
}
console.log(soma);


//Mostrar apenas números pares entre 1 a 20.
let pares: number = 1;
while (pares <= 20) {
if (pares % 2 === 0) console.log(pares);
pares++;
}
