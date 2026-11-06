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

// OPERADORES DE ATRIBUICAO
// jeito curto de fazer uma conta com a variavel e guardar o resultado nela mesma
let valor = 5
console.log(valor)   // 5
//valor = valor + 10
valor += 10
console.log(valor)   // 15
//valor = valor - 5
valor -= 5
console.log(valor)   // 10
//valor = valor * 2
valor *= 2
console.log(valor)   // 20
//valor = valor / 2
valor /= 2
console.log(valor)   // 10
// valor = valor ** 3
valor **= 3
console.log(valor)   // 1000
//incremento: soma 1
valor += 1
valor += 1
valor += 1
valor += 1
valor += 1
valor++              // o mesmo que valor += 1
valor++
console.log(valor)   // 1007
//decremento: tira 1
valor -= 1
valor -= 1
valor--              // o mesmo que valor -= 1
valor--
console.log(valor)   // 1003

// OPERADORES RELACIONAIS
// comparam dois valores e sempre devolvem boolean (true/false)
console.log(10 > 5, 3 > 5)    // maior que: true false
console.log(10 < 5, 3 < 5)    // menor que: false true
console.log(10 >= 5, 3 >= 5)  // maior ou igual a: true false
console.log(10 <= 5, 3 <= 5)  // menor ou igual a: false true
// nas 4 linhas abaixo o editor sublinha de vermelho o 10 com '10': o TypeScript avisa que
// number e string nunca deveriam ser comparados. O tsx roda mesmo assim, e serve pra ver a diferenca
console.log(10 == '10', 10 == 10)    // igual a (so o valor, converte o tipo): true true
console.log(10 === '10', 10 === 10)  // igual a (valor E tipo): false true - prefira este
console.log(10 != '10', 10 != 10)    // diferente de (so o valor): false false
console.log(10 !== '10', 10 !== 10)  // diferente de (valor E tipo): true false - prefira este

// OPERADORES LOGICOS
// and, e, &&: so da true se os dois lados forem true
console.log(true && true, true && false)    // true false
console.log(false && true, false && false)  // false false
console.log(10 > 5 && 5 < 7)                // true
// or, ou, || (pipe): da true se pelo menos um lado for true
console.log(true || true, true || false)    // true true
console.log(false || true, false || false)  // true false
console.log(10 < 5 || 5 < 7)                // true
// not, nao, !: inverte o valor
console.log(!true, !false, !!false)         // false true false
console.log(!(10 === 10))                   // false

// juntando relacionais e logicos (idade vale 13, la de cima)
let maiorIdade = idade >= 18
console.log(maiorIdade)                     // false
let temCarteira = true
let podeDirigir = idade >= 18 && temCarteira
console.log(podeDirigir)                    // false

//CONDICIONAIS SIMPLES
// o if so executa a linha de baixo se a condicao for true
podeDirigir = !podeDirigir                  // inverte: agora e true
if (podeDirigir)
    console.log("Você pode dirigir!")

console.log("Mostrando depois do if")       // essa roda sempre, esta fora do if

// CONDICIONAIS COMPLETOS
// if / else: se a condicao for true roda o 1o bloco, senao roda o do else
// com varias linhas, use chaves { }
const nota = 7.5
if (nota >= 7) {
    console.log("Aprovado!")
} else {
    console.log("Reprovado!")
}

// else if: testa varias condicoes em ordem; roda so a PRIMEIRA que for true
if (nota >= 9) {
    console.log("Conceito A")
} else if (nota >= 7) {
    console.log("Conceito B")
} else if (nota >= 5) {
    console.log("Conceito C")
} else {
    console.log("Conceito D")
}

// condicoes combinadas com && e ||
const hora = 14
if (hora >= 8 && hora < 18) {
    console.log("Estamos abertos")
} else {
    console.log("Estamos fechados")
}

// if dentro de if (aninhado)
const logado = true
const admin = false
if (logado) {
    if (admin) {
        console.log("Painel de administrador")
    } else {
        console.log("Painel do usuario")
    }
}

// OPERADOR TERNARIO
// jeito curto de if/else que devolve um valor: condicao ? valorSeTrue : valorSeFalse
const situacao = nota >= 7 ? "Aprovado" : "Reprovado"
console.log(situacao)

// SWITCH
// compara UMA variavel com varios valores exatos
// "break" encerra o case; sem ele, o codigo "cai" no case de baixo
// "default" roda quando nenhum case bate (e como o else)
const dia = 3
switch (dia) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terca")
        break
    default:
        console.log("Outro dia")
}
// varios cases juntos (sem break entre eles) fazem a mesma coisa
switch (dia) {
    case 1:
    case 7:
        console.log("Fim de semana")
        break
    default:
        console.log("Dia util")
}

// VETORES (ARRAYS)
// lista de valores guardados numa unica variavel; os indices comecam em 0
const frutas: string[] = ["maca", "banana", "uva"]
const numeros: number[] = [10, 20, 30, 40]
console.log(frutas, numeros)
console.log(frutas[0], frutas[2])            // acessa pela posicao: maca uva
console.log(frutas.length)                   // quantidade de itens: 3
console.log(frutas[frutas.length - 1])       // ultimo item: uva
frutas[1] = "laranja"                        // troca o item da posicao 1 (const nao impede mudar o conteudo)
console.log(frutas)

// metodos de vetor
frutas.push("pera")                          // adiciona no FINAL
frutas.unshift("kiwi")                       // adiciona no INICIO
console.log(frutas)
const removidoFim = frutas.pop()             // remove e devolve o ultimo
const removidoInicio = frutas.shift()        // remove e devolve o primeiro
console.log(removidoFim, removidoInicio, frutas)
console.log(frutas.includes("uva"))          // existe no vetor? true
console.log(frutas.indexOf("uva"))           // posicao do item (-1 se nao achar)
console.log(frutas.join(" - "))              // junta tudo num texto: "maca - laranja - uva"
console.log(numeros.slice(1, 3))             // recorta do indice 1 ate 3 (3 nao entra): [20, 30]

// LACO FOR
// repete um bloco: for (inicio; condicao; passo)
// 1) let i = 0  -> comeca em 0 (roda uma vez)
// 2) i < 5      -> testado antes de CADA volta; se false, o laco acaba
// 3) i++        -> roda no fim de cada volta
for (let i = 0; i < 5; i++) {
    console.log("volta", i)                  // 0 1 2 3 4
}

// contagem regressiva (passo negativo)
for (let i = 3; i >= 1; i--) {
    console.log(i)                           // 3 2 1
}

// passo de 2 em 2: so os pares
for (let i = 0; i <= 10; i += 2) {
    console.log(i)                           // 0 2 4 6 8 10
}

// percorrendo um vetor pelo indice
for (let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i])
}

// acumulador: variavel fora do laco que vai juntando valores
let soma = 0
for (let i = 1; i <= 5; i++) {
    soma += i                                // 1+2+3+4+5
}
console.log("soma:", soma)                   // 15

// LACO FOR...OF
// percorre os VALORES do vetor, sem se preocupar com indice
for (const fruta of frutas) {
    console.log(fruta)
}
// tambem funciona com texto: percorre letra por letra
for (const letra of "TS") {
    console.log(letra)                       // T S
}

// LACO WHILE
// repete ENQUANTO a condicao for true (testa antes de cada volta)
// cuidado: se a condicao nunca virar false, o laco e infinito!
let contador = 0
while (contador < 3) {
    console.log("contador:", contador)
    contador++                               // sem isso, nunca acaba
}

// LACO DO...WHILE
// igual ao while, mas testa DEPOIS: roda pelo menos 1 vez
let tentativas = 10
do {
    console.log("rodou uma vez, tentativas:", tentativas)
    tentativas++
} while (tentativas < 5)                     // ja e false, mas o bloco rodou 1 vez

// BREAK E CONTINUE
// break: sai do laco na hora
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        break
    }
    console.log("break:", i)                 // 1 2 3
}
// continue: pula so a volta atual e segue para a proxima
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue
    }
    console.log("continue:", i)              // 1 2 4 5
}

// LACOS ANINHADOS
// um laco dentro de outro: o de dentro faz todas as voltas a cada volta do de fora
// exemplo: tabuada do 1 ao 3
for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
        console.log(`${a} x ${b} = ${a * b}`)
    }
}
