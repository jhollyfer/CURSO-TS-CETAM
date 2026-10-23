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
