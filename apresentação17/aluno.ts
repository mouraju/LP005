import {pessoa} from './pessoam';

class aluno extends pessoa{
nota: number

constructor(nome:string,idade:number,nota:number){
super (nome,idade);
this.nota = nota;
}
estaaprovado():boolean{
    return this.nota>=6;
}

}

let aluno1 = new aluno ("maria santos", 20,8);
if(aluno1.estaaprovado()){
    console.log("aprovado");
    }else{
console.log("reprovado");

    }