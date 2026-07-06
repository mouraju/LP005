let matriz: number[][] = [[1,2],[3,4],[5,6]];

console.log(matriz[0][0]);
console.log(matriz[0][1]);
console.log(matriz[1][0]);
console.log(matriz[1][1]);
console.log(matriz[2][0]);
console.log(matriz[2][1]);

for(let i: number=0;i<matriz.length;i++){
    let linha:string = "";
    for(let j:number=0;j<matriz[i].length;j++){
linha += matriz[i][j]+" ";
    }
console.log(linha);
}