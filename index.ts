// VARIÁVEIS
// "let" cria uma variável: o valor PODE ser trocado depois
let nome = "Lucas"
let idade = 12
// console.log mostra os valores no terminal (separados por espaço)
console.log(nome, idade)
// reatribuição: basta usar o nome, sem "let" de novo
nome = "Lucas Silva"
idade = 13
console.log(nome, idade)

// CONSTANTES
// "const" cria uma constante: o valor NÃO pode ser trocado
const PI = 3.1415
// PI = 10  // descomente para ver o erro: não dá para reatribuir const
console.log(PI)

// TIPOS DE DADOS (INFERÊNCIA - "type inference")
// o TypeScript descobre o tipo sozinho pelo valor atribuído
const ano = 2026                 // number (inteiro)
const peso = 67.5                // number (decimal) - JS não separa int/float
const frase = "Uma frase aqui"   // string (texto)
const maior = idade >= 18        // boolean (true/false), resultado de uma comparação
console.log(ano, peso, frase, maior)

// TIPOS DE DADOS (EXPLÍCITO - "type annotation", anotação de tipo)
// aqui NÓS dizemos o tipo com ": tipo" depois do nome
const codigo: number = 12122
const altura: number = 1.75
const aprovado: boolean = false
const palavra: string = "Uma palavra aqui"
console.log(codigo, altura, aprovado, palavra)

// STRING
// três formas de escrever texto: aspas duplas, simples ou crase
let texto = "Texto com aspas duplas"
console.log(texto)
texto = 'Texto com aspas simples'
console.log(texto)
// crase (template string) permite colocar variáveis dentro com ${...}
texto = `Texto com template string ${ano}`
console.log(texto)
const nome_completo = " Lucas Silva "
// limpando texto (retira espaços no começo e no fim)
const limpo = nome_completo.trim()
// Maiúscula
const maiuscula = limpo.toUpperCase()
// Minúscula
const minuscula = limpo.toLowerCase()
// Verifica existência de letra (ou ocorrência)
// includes devolve true/false
const existe = limpo.includes("u")
console.log(nome_completo, limpo, maiuscula, minuscula, existe)

// STRING (mais métodos)
const tamanho = limpo.length                 // quantidade de caracteres (propriedade, sem parênteses)
const primeira = limpo.charAt(0)             // caractere numa posição (começa em 0)
const posicao = limpo.indexOf("Silva")       // posição onde o trecho começa (-1 se não achar)
const pedaco = limpo.slice(0, 5)             // recorta do índice 0 até 5 (5 não entra)
const trocado = limpo.replace("Lucas", "Pedro") // troca a 1ª ocorrência (não altera o original)
const partes = limpo.split(" ")              // quebra o texto em um vetor, separando pelo espaço
const comeca = limpo.startsWith("Lu")        // true se começa com o trecho
const termina = limpo.endsWith("va")         // true se termina com o trecho
const repetido = "ha".repeat(3)              // repete o texto: "hahaha"
const preenchido = "7".padStart(3, "0")      // completa à esquerda até ter 3 chars: "007"
console.log(tamanho, primeira, posicao, pedaco, trocado, partes, comeca, termina, repetido, preenchido)

// NUMBERS (métodos)
const decimal = 12.3456
console.log(decimal.toFixed(2))      // fixa casas decimais (devolve string): "12.35"
console.log(decimal.toString())      // converte número em texto
console.log(Math.round(decimal))     // arredonda normal: 12
console.log(Math.floor(decimal))     // arredonda para baixo: 12
console.log(Math.ceil(decimal))      // arredonda para cima: 13
console.log(Math.max(1, 5, 3))       // maior valor: 5
console.log(Math.min(1, 5, 3))       // menor valor: 1
console.log(Math.pow(2, 3))          // potência: 2 elevado a 3 = 8
console.log(Math.sqrt(16))           // raiz quadrada: 4
console.log(Math.abs(-10))           // valor absoluto (sem sinal): 10
console.log(Number("42") + 1)        // converte texto em número: 43
console.log(parseInt("42.9"))        // texto -> inteiro (corta decimais): 42
console.log(parseFloat("42.9"))      // texto -> decimal: 42.9
console.log(Number.isInteger(10))    // é inteiro? true
console.log(Number.isNaN(NaN))       // é NaN (não é número)? true
// Math.random() gera 0 <= x < 1; multiplicando por 10 e usando floor: inteiro de 0 a 9
const aleatorio = Math.floor(Math.random() * 10)
console.log(aleatorio)

// OPERADORES ARITMÉTICOS
// fazem contas com números
const x: number = 10
const y: number = 3
console.log(x + y)   // soma: 13
console.log(x - y)   // subtração: 7
console.log(x * y)   // multiplicação: 30
console.log(x / y)   // divisão: 3.3333...
console.log(x % y)   // resto da divisão (módulo): 1
console.log(x ** y)  // potência: 10 elevado a 3 = 1000

// OPERADORES DE ATRIBUIÇÃO
// jeito curto de fazer uma conta com a variável e guardar o resultado nela mesma
let valor = 5
valor += 10          // valor = valor + 10 -> 15
valor -= 5           // valor = valor - 5 -> 10
valor *= 2           // valor = valor * 2 -> 20
valor /= 2           // valor = valor / 2 -> 10
valor **= 3          // valor = valor ** 3 -> 1000
valor %= 7           // valor = valor % 7 -> 6 (resto de 1000 / 7)
console.log(valor)
valor++              // incremento: valor = valor + 1 -> 7
valor--              // decremento: valor = valor - 1 -> 6
console.log(valor)

// OPERADORES RELACIONAIS (de comparação)
// comparam dois valores e sempre devolvem boolean (true/false)
console.log(x > y)    // maior que: true
console.log(x < y)    // menor que: false
console.log(x >= 10)  // maior ou igual: true
console.log(x <= 9)   // menor ou igual: false
// 10 com '10' (number com string): o editor sublinha de vermelho, mas o tsx roda
console.log(10 == '10', 10 == 10)    // igual (só valor, converte o tipo): true true - evite
console.log(10 === '10', 10 === 10)  // estritamente igual (valor E tipo): false true - prefira este
console.log(10 != '10', 10 != 10)    // diferente (só valor): false false - evite
console.log(10 !== '10', 10 !== 10)  // estritamente diferente (valor E tipo): true false - prefira este

// OPERADORES LÓGICOS
// combinam resultados booleanos
console.log(true && false)  // && (E): só é true se TODOS forem true -> false
console.log(true || false)  // || (OU): é true se PELO MENOS UM for true -> true
console.log(!true)          // ! (NÃO): inverte o valor -> false
console.log(x > 5 && y < 5) // exemplo combinando comparações: true
console.log(10 < 5 || 5 < 7) // pelo menos uma verdadeira: true
console.log(!!false)        // dois ! se cancelam: false
console.log(!(10 === 10))   // inverte o resultado da comparação: false

// juntando relacionais e lógicos e guardando o resultado (idade vale 13)
let maiorIdade = idade >= 18
console.log(maiorIdade)                     // false
let temCarteira = true
let podeDirigir = idade >= 18 && temCarteira
console.log(podeDirigir)                    // false

// CONDICIONAL SIMPLES
// if sem chaves: só a linha logo abaixo fica dentro do if
podeDirigir = !podeDirigir                  // inverte: agora é true
if (podeDirigir)
    console.log("Você pode dirigir!")
console.log("Mostrando depois do if")       // roda sempre, está fora do if

// if executa o bloco se a condição for true; senão, executa o else
if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

// CONDICIONAL COMPOSTA (else if / operadores lógicos)
// else if testa várias condições em ordem; a primeira verdadeira vence
const nota = 7.5
if (nota >= 9) {
    console.log("Excelente")
} else if (nota >= 7) {
    console.log("Aprovado")
} else if (nota >= 5) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

// operadores lógicos: && (E: ambos true), || (OU: um true basta), ! (NÃO: inverte)
// temCarteira já foi criada lá nos operadores lógicos
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
// um if dentro de outro: o de dentro só é avaliado se o de fora for true
const logado = true
const admin = false
if (logado) {
    if (admin) {
        console.log("Painel de administrador")
    } else {
        console.log("Painel de usuário")
    }
} else {
    console.log("Faça login")
}

// ESCOLHA (switch)
// compara uma variável com vários "case"; útil no lugar de muitos else if
const dia: number = 3
switch (dia) {
    case 1:
        console.log("Domingo")
        break // break encerra o switch; sem ele, cai no próximo case
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terça")
        break
    default: // executa se nenhum case bater
        console.log("Outro dia")
}

// WHILE
// testa a condição ANTES; pode não executar nenhuma vez
// cuidado: lembre de alterar a variável, senão vira loop infinito
let contador = 1
while (contador <= 5) {
    console.log("while", contador)
    contador++ // contador = contador + 1
}

// DO WHILE (executa pelo menos uma vez)
// executa o bloco primeiro e só depois testa a condição
let numero = 10
do {
    console.log("do while", numero) // roda 1 vez mesmo com a condição falsa
    numero++
} while (numero < 5)

// FOR
// for (início; condição; passo): ideal quando se sabe quantas repetições
for (let i = 0; i < 5; i++) {
    console.log("for", i)
}

// FUNÇÕES
// function nome(parâmetros): tipoDeRetorno { ... }
function somar(a: number, b: number): number {
    return a + b // return devolve o resultado para quem chamou
}
// void = a função não devolve nada, só executa uma ação
function saudacao(pessoa: string): void {
    console.log(`Olá, ${pessoa}!`)
}
console.log(somar(2, 3))
saudacao("Lucas")

// ARROW FUNCTION
// sintaxe curta: (parâmetros) => resultado
const subtrair = (a: number, b: number): number => a - b // sem chaves: retorno implícito
const multiplicar = (a: number, b: number): number => {
    return a * b // com chaves: precisa do return
}
const dobro = (n: number) => n * 2 // com 1 parametro; tipo de retorno inferido
console.log(subtrair(5, 2), multiplicar(3, 4), dobro(8))

// VETORES (ARRAYS)
// lista de valores; string[] = vetor de strings; índices começam em 0
const frutas: string[] = ["maçã", "banana", "uva"]
console.log(frutas)
console.log(frutas[0])          // acessa pelo índice: "maçã"
console.log(frutas.length)      // quantidade de itens
frutas.push("laranja")          // adiciona no fim
frutas.unshift("morango")       // adiciona no início
frutas.pop()                    // remove do fim
frutas.shift()                  // remove do início
console.log(frutas)
console.log(frutas.includes("uva"))   // existe no vetor? true/false
console.log(frutas.indexOf("banana")) // índice do item (-1 se não achar)
console.log(frutas.join(", "))        // junta tudo em uma string
console.log(frutas.slice(0, 2))       // copia um pedaço (não altera o original)
console.log(frutas.reverse())         // inverte a ordem (ALTERA o original)

const numeros: number[] = [1, 2, 3, 4, 5]
console.log(numeros.map((n) => n * 2))           // cria novo vetor transformando cada item
console.log(numeros.filter((n) => n % 2 === 0))  // novo vetor só com os que passam no teste (pares)
console.log(numeros.find((n) => n > 3))          // primeiro item que passa no teste: 4
console.log(numeros.reduce((acc, n) => acc + n, 0)) // reduz a um valor só (soma): 15; 0 é o valor inicial
numeros.forEach((n) => console.log("forEach", n))   // executa algo para cada item

// VETORES (mais métodos de alta ordem)
// recebem uma função (callback) que roda para cada item
console.log(numeros.findIndex((n) => n > 3))   // índice do primeiro que passa no teste: 3 (-1 se não achar)
console.log(numeros.findLast((n) => n < 4))    // último item que passa no teste: 3
console.log(numeros.some((n) => n > 4))        // ALGUM item passa no teste? true
console.log(numeros.every((n) => n > 0))       // TODOS os itens passam no teste? true
console.log(numeros.reduceRight((acc, n) => acc + n, "")) // como reduce, mas da direita p/ esquerda: "54321"
console.log([3, 1, 10, 2].sort())              // sort sem função ordena como TEXTO: [1, 10, 2, 3]
console.log([3, 1, 10, 2].sort((a, b) => a - b)) // ordem numérica crescente: [1, 2, 3, 10]
console.log([3, 1, 10, 2].sort((a, b) => b - a)) // ordem numérica decrescente: [10, 3, 2, 1]
console.log(numeros.flatMap((n) => [n, n * 10]))  // map + achata um nível: [1, 10, 2, 20, ...]
console.log([[1, 2], [3, [4]]].flat())         // achata sub-vetores (1 nível): [1, 2, 3, [4]]
console.log(numeros.concat([6, 7]))            // junta vetores, devolve novo vetor
console.log([...numeros, 6, 7])                // spread (...) espalha os itens: outra forma de juntar
console.log(numeros.at(-1))                    // acessa pelo índice, aceita negativo: último item (5)
console.log(Array.from({ length: 3 }, (_, i) => i * 2)) // cria vetor por regra: [0, 2, 4]

// splice altera o vetor original: splice(início, quantosRemover, ...itensParaInserir)
const copia = [...numeros]                     // cópia para não mexer em "numeros"
copia.splice(1, 2)                             // remove 2 itens a partir do índice 1
console.log(copia)                             // [1, 4, 5]
copia.splice(1, 0, 99)                         // insere 99 no índice 1 sem remover nada
console.log(copia)                             // [1, 99, 4, 5]

// Encadeando métodos: o resultado de um vira entrada do próximo
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
console.log(produtos.map((p) => p.nome))                       // só os nomes
console.log(produtos.filter((p) => p.estoque > 0))             // só os que têm estoque
console.log(produtos.find((p) => p.nome === "mochila"))        // o objeto da mochila
console.log(produtos.reduce((total, p) => total + p.preco * p.estoque, 0)) // valor total em estoque: 510
console.log(produtos.some((p) => p.estoque === 0))             // algum esgotado? true
console.log(produtos.every((p) => p.preco > 0))                // todos com preço válido? true
console.log([...produtos].sort((a, b) => a.preco - b.preco))   // ordena por preço (cópia, não altera o original)

// FOR OF (percorre os valores do vetor)
// mais simples que o for quando não precisa do índice
for (const fruta of frutas) {
    console.log("for of", fruta)
}
for (const n of numeros) {
    console.log("for of", n)
}

// FOR com vetor (usando índice)
// use quando precisar da posição (i) além do valor
for (let i = 0; i < frutas.length; i++) {
    console.log("for", i, frutas[i])
}
