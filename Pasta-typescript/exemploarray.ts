// demonstração vetor e detalhação de índices

let vetor: number[] = [12,55,43,23,225,5,1]

console.log(vetor[0]);
console.log(vetor[1]);
console.log(vetor[2]);
console.log(vetor[3]);
console.log(vetor[4]);

console.log("for");
for(let i:number=0;i<vetor.length;i++){
    console.log(`[${i}] -> ${vetor[i]}`);
}


// demostração matriz
console.log("matriz");
let matriz: number[][] = [[2,4,3],[7,20,66],[40,1,10],[5,6,8]];

console.log(matriz[1][0]);

// detalhamento das linhas e colunas (sem formatação)
for(let i: number = 0;i<4;i++){
    for(let j: number = 0;j<3;j++){
        console.log(matriz[i][j]);
    }
console.log();
}

//detalhamento das linhas e colunas (formatação)
matriz[0].length
matriz[1].length
matriz[2].length