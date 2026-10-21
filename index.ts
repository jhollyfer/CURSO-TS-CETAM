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
