let opcao: number = 1;

do{
console.log("--- Menu ---")
console.log("1-Calcular soma")
console.log("2-Exibir contagem")
console.log("0-Sair")
console.log("================")

opcao = 0;
switch(opcao){
case 1: 
console.log("Calcular soma");
break;
case 2: 
console.log("CExibir contagem");
break; 
case 0:
 console.log("Sistema encerrando...");
 break;

 default:
 console.log("Opção inválida");
break;
}


}while(opcao !== 0);
console.log("Sistema encerrando.")
