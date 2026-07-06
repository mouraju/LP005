// Criação array com for clássico
let numeros: number[] = [12,15,78,45,59,102];
console.log("for clássico")

for(let i : number =0;i<numeros.length;i++){
console.log(`Índice ${i}: ${numeros[i]}`);     // indicação de cada número e seus respectivos índices.
}

// for of utilizando as informações da variavél 'números'
console.log ("for...of:");
for(let n of numeros){      // variavél N pede informações ao vetor 'números'
console.log(n);       // exibe os dados apresentes dentro da variavél.
}


// foreach utilizando as informações da variavél 'números'
console.log("foreach:");
numeros.forEach( // chamado sempre nessa função
    (n,i) => { // apresentar a variavél e o índice nessa ordem variavél,índice...
console.log(`Índice: ${i}: ${n}`);        
    }

);

