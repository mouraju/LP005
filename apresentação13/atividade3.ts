let numeros: number[]= [67,2,10,100,4,80];

console.log(numeros);

let crescente = [...numeros].sort((a,b)=>a-b);
console.log(crescente);

let decrescente = [...numeros].sort((a,b)=>b-a);
console.log(decrescente);