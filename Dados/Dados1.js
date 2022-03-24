// var ou let para criar varialvel
var nome = "Pincel"
var quantidade = 10
var preco = 10.25
var imposto = 2.75
var precoFinal = preco + imposto
var precoLote = precoFinal * quantidade //teste

console.log(nome)
console.log(quantidade)
console.log(preco)
console.log(imposto)
console.log(precoFinal)

//teste
console.log(precoLote)

console.log('Quantidade de', nome, 'em estoque =', quantidade,
'Valor total =', precoLote)
precoFinal = preco
console.log('Valor do lote completo sem imposto R$' + precoFinal * quantidade) 
//teste (virgula para separar texto da "ação", "+" deixa a palavra junto da variavel)