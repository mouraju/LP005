let valor: number = 1;
let frequenci: number = 1;
let alunoon: boolean = !true;
let media: number = (valor*6)+(frequenci*4)/10

if ((valor >= 6 && frequenci >= 75)
    ||  valor >= 9){
media = (valor*6)+(frequenci*4)/10
console.log(media)
console.log ("aprovado");
} else {
    console.log("reprovado");
}

if(!alunoon){
console.log ("Acesso negado! esse aluno não frequenta");
} else{
    console.log("Acesso liberado! esse aluno é frequente");
}
