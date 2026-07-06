import { pessoa } from './pessoa';
class alunos extends pessoa{
nota:number

constructor(nome:string, idade:number, nota:number){
    super (nome,idade);
    this.nota = nota;
}
estaAprovado():boolean{
    return this.nota >=6;
}

}

