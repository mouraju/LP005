let numero: number[] = [12,34,45,258,56,88,157];
let soma: number = 0;

let maior: number = numero[0];
let menor: number = numero [0];

for(let n of numero){
soma += n;
if (maior<n){
maior = n;
}
if (menor > n){
    menor = n;
}

}
console.log(`soma: ${soma}`);
let media = soma/numero.length;
console.log(`Média: ${media}`);
console.log(`maior: ${maior}`)
console.log(`menor: ${menor}`)
