// VARIAVEIS
// "let" cria uma variavel: o valor PODE ser trocado depois
let nome = "Lucas"
let idade = 12
// console.log mostra os valores no terminal (separados por espaco)
console.log(nome, idade)
// reatribuicao: basta usar o nome, sem "let" de novo
nome = "Lucas Silva"
idade = 13
console.log(nome, idade)

// CONSTANTES
// "const" cria uma constante: o valor NAO pode ser trocado
const PI = 3.1415
// PI = 10  // descomente para ver o erro: nao da para reatribuir const
console.log(PI)

// TIPOS DE DADOS (INFERENCIA - "type inference")
// o TypeScript descobre o tipo sozinho pelo valor atribuido
const ano = 2026                 // number (inteiro)
const peso = 67.5                // number (decimal) - JS nao separa int/float
const frase = "Uma frase aqui"   // string (texto)
const maior = idade >= 18        // boolean (true/false), resultado de uma comparacao
console.log(ano, peso, frase, maior)

// TIPOS DE DADOS (EXPLICITO - "type annotation", anotacao de tipo)
// aqui NOS dizemos o tipo com ": tipo" depois do nome
const codigo: number = 12122
const altura: number = 1.75
const aprovado: boolean = false
const palavra: string = "Uma palavra aqui"
console.log(codigo, altura, aprovado, palavra)

// STRING
// tres formas de escrever texto: aspas duplas, simples ou crase
let texto = "Texto com aspas duplas"
console.log(texto)
texto = 'Texto com aspas simples'
console.log(texto)
// crase (template string) permite colocar variaveis dentro com ${...}
texto = `Texto com template string ${ano}`
console.log(texto)
const nome_completo = " Lucas Silva "
// limpando texto (retira espaços no começo e no fim)
const limpo = nome_completo.trim()
// Maiuscula
const maiuscula = limpo.toUpperCase()
// Minuscula
const minuscula = limpo.toLowerCase()
// Verifica existencia de letra (ou ocorrencia)
// includes devolve true/false
const existe = limpo.includes("u")
console.log(nome_completo, limpo, maiuscula, minuscula, existe)

// STRING (mais metodos)
const tamanho = limpo.length                 // quantidade de caracteres (propriedade, sem parenteses)
const primeira = limpo.charAt(0)             // caractere numa posicao (comeca em 0)
const posicao = limpo.indexOf("Silva")       // posicao onde o trecho comeca (-1 se nao achar)
const pedaco = limpo.slice(0, 5)             // recorta do indice 0 ate 5 (5 nao entra)
const trocado = limpo.replace("Lucas", "Pedro") // troca a 1a ocorrencia (nao altera o original)
const partes = limpo.split(" ")              // quebra o texto em um vetor, separando pelo espaco
const comeca = limpo.startsWith("Lu")        // true se comeca com o trecho
const termina = limpo.endsWith("va")         // true se termina com o trecho
const repetido = "ha".repeat(3)              // repete o texto: "hahaha"
const preenchido = "7".padStart(3, "0")      // completa a esquerda ate ter 3 chars: "007"
console.log(tamanho, primeira, posicao, pedaco, trocado, partes, comeca, termina, repetido, preenchido)

// NUMBERS (metodos)
const decimal = 12.3456
console.log(decimal.toFixed(2))      // fixa casas decimais (devolve string): "12.35"
console.log(decimal.toString())      // converte numero em texto
console.log(Math.round(decimal))     // arredonda normal: 12
console.log(Math.floor(decimal))     // arredonda para baixo: 12
console.log(Math.ceil(decimal))      // arredonda para cima: 13
console.log(Math.max(1, 5, 3))       // maior valor: 5
console.log(Math.min(1, 5, 3))       // menor valor: 1
console.log(Math.pow(2, 3))          // potencia: 2 elevado a 3 = 8
console.log(Math.sqrt(16))           // raiz quadrada: 4
console.log(Math.abs(-10))           // valor absoluto (sem sinal): 10
console.log(Number("42") + 1)        // converte texto em numero: 43
console.log(parseInt("42.9"))        // texto -> inteiro (corta decimais): 42
console.log(parseFloat("42.9"))      // texto -> decimal: 42.9
console.log(Number.isInteger(10))    // e inteiro? true
console.log(Number.isNaN(NaN))       // e NaN (nao e numero)? true
// Math.random() gera 0 <= x < 1; multiplicando por 10 e usando floor: inteiro de 0 a 9
const aleatorio = Math.floor(Math.random() * 10)
console.log(aleatorio)

// OPERADORES ARITMETICOS
// fazem contas com numeros
const x: number = 10
const y: number = 3
console.log(x + y)   // soma: 13
console.log(x - y)   // subtracao: 7
console.log(x * y)   // multiplicacao: 30
console.log(x / y)   // divisao: 3.3333...
console.log(x % y)   // resto da divisao (modulo): 1
console.log(x ** y)  // potencia: 10 elevado a 3 = 1000
let valor = 5
valor++              // incremento: valor = valor + 1 -> 6
valor--              // decremento: valor = valor - 1 -> 5
valor += 2           // valor = valor + 2 -> 7 (tambem existem -=, *=, /=, %=)
console.log(valor)

// OPERADORES RELACIONAIS (de comparacao)
// comparam dois valores e sempre devolvem boolean (true/false)
console.log(x > y)    // maior que: true
console.log(x < y)    // menor que: false
console.log(x >= 10)  // maior ou igual: true
console.log(x <= 9)   // menor ou igual: false
console.log(x == ("10" as any))  // igual (so valor, converte o tipo): true - evite
console.log(x === 10)   // estritamente igual (valor E tipo): true - prefira este
console.log(x === ("10" as any)) // false, pois number e diferente de string
console.log(x != y)     // diferente (so valor): true
console.log(x !== y)    // estritamente diferente (valor E tipo): true

// OPERADORES LOGICOS
// combinam resultados booleanos
console.log(true && false)  // && (E): so e true se TODOS forem true -> false
console.log(true || false)  // || (OU): e true se PELO MENOS UM for true -> true
console.log(!true)          // ! (NAO): inverte o valor -> false
console.log(x > 5 && y < 5) // exemplo combinando comparacoes: true

// CONDICIONAL SIMPLES
// if executa o bloco se a condicao for true; senao, executa o else
if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

// CONDICIONAL COMPOSTA (else if / operadores logicos)
// else if testa varias condicoes em ordem; a primeira verdadeira vence
const nota = 7.5
if (nota >= 9) {
    console.log("Excelente")
} else if (nota >= 7) {
    console.log("Aprovado")
} else if (nota >= 5) {
    console.log("Recuperacao")
} else {
    console.log("Reprovado")
}

// operadores logicos: && (E: ambos true), || (OU: um true basta), ! (NAO: inverte)
const temCarteira = true
if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir")
}
if (idade < 12 || idade > 65) {
    console.log("Tem desconto")
}
if (!temCarteira) {
    console.log("Sem carteira")
}

// CONDICIONAL ANINHADA
// um if dentro de outro: o de dentro so e avaliado se o de fora for true
const logado = true
const admin = false
if (logado) {
    if (admin) {
        console.log("Painel de administrador")
    } else {
        console.log("Painel de usuario")
    }
} else {
    console.log("Faca login")
}

// ESCOLHA (switch)
// compara uma variavel com varios "case"; util no lugar de muitos else if
const dia: number = 3
switch (dia) {
    case 1:
        console.log("Domingo")
        break // break encerra o switch; sem ele, cai no proximo case
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terca")
        break
    default: // executa se nenhum case bater
        console.log("Outro dia")
}

// WHILE
// testa a condicao ANTES; pode nao executar nenhuma vez
// cuidado: lembre de alterar a variavel, senao vira loop infinito
let contador = 1
while (contador <= 5) {
    console.log("while", contador)
    contador++ // contador = contador + 1
}

// DO WHILE (executa pelo menos uma vez)
// executa o bloco primeiro e so depois testa a condicao
let numero = 10
do {
    console.log("do while", numero) // roda 1 vez mesmo com a condicao falsa
    numero++
} while (numero < 5)

// FOR
// for (inicio; condicao; passo): ideal quando se sabe quantas repeticoes
for (let i = 0; i < 5; i++) {
    console.log("for", i)
}

// FUNCOES
// function nome(parametros): tipoDeRetorno { ... }
function somar(a: number, b: number): number {
    return a + b // return devolve o resultado para quem chamou
}
// void = a funcao nao devolve nada, so executa uma acao
function saudacao(pessoa: string): void {
    console.log(`Ola, ${pessoa}!`)
}
console.log(somar(2, 3))
saudacao("Lucas")

// ARROW FUNCTION
// sintaxe curta: (parametros) => resultado
const subtrair = (a: number, b: number): number => a - b // sem chaves: retorno implicito
const multiplicar = (a: number, b: number): number => {
    return a * b // com chaves: precisa do return
}
const dobro = (n: number) => n * 2 // com 1 parametro; tipo de retorno inferido
console.log(subtrair(5, 2), multiplicar(3, 4), dobro(8))

// VETORES (ARRAYS)
// lista de valores; string[] = vetor de strings; indices comecam em 0
const frutas: string[] = ["maca", "banana", "uva"]
console.log(frutas)
console.log(frutas[0])          // acessa pelo indice: "maca"
console.log(frutas.length)      // quantidade de itens
frutas.push("laranja")          // adiciona no fim
frutas.unshift("morango")       // adiciona no inicio
frutas.pop()                    // remove do fim
frutas.shift()                  // remove do inicio
console.log(frutas)
console.log(frutas.includes("uva"))   // existe no vetor? true/false
console.log(frutas.indexOf("banana")) // indice do item (-1 se nao achar)
console.log(frutas.join(", "))        // junta tudo em uma string
console.log(frutas.slice(0, 2))       // copia um pedaco (nao altera o original)
console.log(frutas.reverse())         // inverte a ordem (ALTERA o original)

const numeros: number[] = [1, 2, 3, 4, 5]
console.log(numeros.map((n) => n * 2))           // cria novo vetor transformando cada item
console.log(numeros.filter((n) => n % 2 === 0))  // novo vetor so com os que passam no teste (pares)
console.log(numeros.find((n) => n > 3))          // primeiro item que passa no teste: 4
console.log(numeros.reduce((acc, n) => acc + n, 0)) // reduz a um valor so (soma): 15; 0 e o valor inicial
numeros.forEach((n) => console.log("forEach", n))   // executa algo para cada item

// VETORES (mais metodos de alta ordem)
// recebem uma funcao (callback) que roda para cada item
console.log(numeros.findIndex((n) => n > 3))   // indice do primeiro que passa no teste: 3 (-1 se nao achar)
console.log(numeros.findLast((n) => n < 4))    // ultimo item que passa no teste: 3
console.log(numeros.some((n) => n > 4))        // ALGUM item passa no teste? true
console.log(numeros.every((n) => n > 0))       // TODOS os itens passam no teste? true
console.log(numeros.reduceRight((acc, n) => acc + n, "")) // como reduce, mas da direita p/ esquerda: "54321"
console.log([3, 1, 10, 2].sort())              // sort sem funcao ordena como TEXTO: [1, 10, 2, 3]
console.log([3, 1, 10, 2].sort((a, b) => a - b)) // ordem numerica crescente: [1, 2, 3, 10]
console.log([3, 1, 10, 2].sort((a, b) => b - a)) // ordem numerica decrescente: [10, 3, 2, 1]
console.log(numeros.flatMap((n) => [n, n * 10]))  // map + achata um nivel: [1, 10, 2, 20, ...]
console.log([[1, 2], [3, [4]]].flat())         // achata sub-vetores (1 nivel): [1, 2, 3, [4]]
console.log(numeros.concat([6, 7]))            // junta vetores, devolve novo vetor
console.log([...numeros, 6, 7])                // spread (...) espalha os itens: outra forma de juntar
console.log(numeros.at(-1))                    // acessa pelo indice, aceita negativo: ultimo item (5)
console.log(Array.from({ length: 3 }, (_, i) => i * 2)) // cria vetor por regra: [0, 2, 4]

// splice altera o vetor original: splice(inicio, quantosRemover, ...itensParaInserir)
const copia = [...numeros]                     // copia para nao mexer em "numeros"
copia.splice(1, 2)                             // remove 2 itens a partir do indice 1
console.log(copia)                             // [1, 4, 5]
copia.splice(1, 0, 99)                         // insere 99 no indice 1 sem remover nada
console.log(copia)                             // [1, 99, 4, 5]

// Encadeando metodos: o resultado de um vira entrada do proximo
const somaDosQuadradosPares = numeros
    .filter((n) => n % 2 === 0)                // [2, 4]
    .map((n) => n ** 2)                        // [4, 16]
    .reduce((acc, n) => acc + n, 0)            // 20
console.log(somaDosQuadradosPares)

// Vetor de objetos: onde map/filter/find/reduce mais aparecem no dia a dia
const produtos = [
    { nome: "caneta", preco: 3, estoque: 10 },
    { nome: "caderno", preco: 15, estoque: 0 },
    { nome: "mochila", preco: 120, estoque: 4 },
]
console.log(produtos.map((p) => p.nome))                       // so os nomes
console.log(produtos.filter((p) => p.estoque > 0))             // so os que tem estoque
console.log(produtos.find((p) => p.nome === "mochila"))        // o objeto da mochila
console.log(produtos.reduce((total, p) => total + p.preco * p.estoque, 0)) // valor total em estoque: 510
console.log(produtos.some((p) => p.estoque === 0))             // algum esgotado? true
console.log(produtos.every((p) => p.preco > 0))                // todos com preco valido? true
console.log([...produtos].sort((a, b) => a.preco - b.preco))   // ordena por preco (copia, nao altera o original)

// FOR OF (percorre os valores do vetor)
// mais simples que o for quando nao precisa do indice
for (const fruta of frutas) {
    console.log("for of", fruta)
}
for (const n of numeros) {
    console.log("for of", n)
}

// FOR com vetor (usando indice)
// use quando precisar da posicao (i) alem do valor
for (let i = 0; i < frutas.length; i++) {
    console.log("for", i, frutas[i])
}
