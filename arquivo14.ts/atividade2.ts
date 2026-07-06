let produtos: {nome: string; preco: number} []=[
{nome: "Notebook",preco: 2790},
{nome: "Televisão",preco: 2900},
{nome: "Teclado",preco: 250}
];

console.log("-----relatório de produtos-----")
console.log(`produto: ${produtos[0].nome} | preço: R$ ${produtos[0].preco}`)
console.log(`produto: ${produtos[2].nome} | preço: R$ ${produtos[2].preco}`)

for( let produto of produtos){
console.log(`produto: ${produto.nome} | preço: R$ ${produto.preco}`);
}

console.log("-----relatório de produtos com valor alterado-----")
produtos[1].preco=800
for( let produto of produtos){
console.log(`produto: ${produto.nome} | preço: R$ ${produto.preco}`);
}






