 const pessoa = {
     nome: 'Shaco',
     idade: 27,
     cidade: 'Piltover',
     ativo: true
 }

 const preco = [12.30, 45.67, 56.93]
 const nPreco = preco.map((p) => p * 1.10)

 console.log(nPreco)
 for (let i = 0; i < nPreco.length; i++) {
     console.log(nPreco[i])

 }

 const idade = [32, 10, 57, 30]
 const nIdade = idade.map((sixseven) => sixseven + 10)

 console.log(nIdade)

 const numeros = [1, 2, 3, 4, 5, 6]
 const nDobrados = numeros.map((num) => num * 2)

 console.log(nDobrados)

 const frutas = ['maçã', 'banana', 'laranja']
 const nFrutas = frutas.map((fruta) => fruta.toUpperCase())
 console.log(nFrutas)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosPares = numeros.filter(
    (num) => {
        return num % 2 == 0
    })
console.log(numerosPares)

const produtos = [
    { nome: 'Teclado', Preco: 150 },
    { nome: 'Mouse', Preco: 230 },
    { nome: 'Monitor', Preco: 300 },
    { nome: 'Fone', Preco: 50 },
]

const nProdutos = produtos.filter((p) => p.Preco < 100)
console.log(nProdutos)

const nomes = ['kevin','vitoria','marcos','flavio','laercio']
const resultado = nomes.filter((tamanho)=> tamanho.length > 6)
console.log(resultado)

const vendas = [666, 323,457,6,79,865,46,345,]
const MaiorValor = vendas.reduce((maiorValor,elementoAtual)=>{
    return maiorValor>elementoAtual?maiorValor:elementoAtual;
},0);
console.log(MaiorValor)

const MenorValor = vendas.reduce((menorValor,elementoAtual)=>{
    return menorValor<elementoAtual?menorValor:elementoAtual;
});
console.log(MenorValor)

const valorAcumulado= vendas.reduce((valorAcumulado,elementoAtual)=>{
    return valorAcumulado+elementoAtual;
},0)
console.log(`o faturamento total é ${valorAcumulado}`)