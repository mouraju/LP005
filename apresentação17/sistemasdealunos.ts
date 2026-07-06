class aluno{
nome:string;
nota:number;

constructor(nome:string, nota:number){
this.nome = nome;
this.nota = nota;
}
estaAprovado(): boolean{
return this.nota >=6;

}
}

// inicialização do vetor
let alunos: aluno[] = [];

function adicionaraluno( nome:string, nota: number):void {
    alunos.push
}