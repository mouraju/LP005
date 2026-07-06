let aluno:{nome: string; idade: number; matriculado: boolean } = {
nome: "juliana",
idade: 19,
matriculado: true
};
aluno.idade = 20;
console.log(aluno.nome); // se quiser que apareça mais detakhes no terminal collocar (`nome: ${aluno.nome}`);
console.log(aluno.idade);
console.log(aluno.matriculado);

console.log(`nome: ${aluno.nome}`);
console.log(`idade: ${aluno.idade}`);
console.log(`matriculado: ${aluno.matriculado}`);