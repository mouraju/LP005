class Aluno {
Nome: string;
Idade: number;
Nota: number;

constructor(Nome: string, Idade: number, Nota: number) {
this.Nome = Nome;
this.Idade = Idade;
this.Nota = Nota;

function verificarnota (Nota:number): string {
if (Nota>= 6) return "aprovadoo";
else return "reprovado";
}
} 
}


