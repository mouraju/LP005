// Atividade 1
let  n: number = -4;

if(n > 0){
    console.log("Positivo");
} else if(n < 0){
    console.log("Negativo");
} else{
    console.log("O número é zero");
}

// Atividade 2
let nota: number = 4;

if(nota >= 6){
    console.log("Aprovado");
}else if(nota >= 4){
    console.log("Recuperação");
}else{
    console.log("Reprovado");
}

// Ativiidade 3
let opcao: number = 7;

console.log("---Sistema Escolar---")
console.log("1-Cadastrar")
console.log("2-Consultar")
console.log("3-Excluir")
console.log("4-Sair")

switch(opcao){
case 1: 
console.log("Cadastrar.");
break;
case 2: 
console.log("Consultar");
break; 
case 3:
    console.log("Excluir");
break;
case 4:
        console.log("Sair");
        break;
        default:
            console.log("Opção inválida");
break;
}