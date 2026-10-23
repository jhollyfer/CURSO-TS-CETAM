# Gabarito do extra 1 (teórica: leitura de código)

**a)** O `let` deixa trocar o valor depois, e o `const` não deixa. Como `aluno` foi criada com `let`, ela aceita valor novo. Se tirar o comentário de `NOTA_MAXIMA = 11`, dá **erro**, porque não se troca o valor de uma `const`.

**b)**

| Variável | Tipo | Como |
|---|---|---|
| `aluno` | string | inferido |
| `faltas` | number | inferido |
| `NOTA_MAXIMA` | number | explícito |
| `nota1` | number | inferido |
| `nota2` | number | explícito |
| `aprovado` | boolean | inferido (resultado de uma comparação) |

**c)** Aspas duplas `" "`, aspas simples `' '` e crase `` ` ` ``. A L7 usa a crase (template string), que é a única que deixa colocar variáveis dentro do texto com `${...}`.

**d)**

```
L1:  ANA SOUZA 9
L2:  s 4 -1
L3:  ana [ 'ana', 'souza' ]
L4:  ena souza ana souza
L5:  true false true
L6:  004 ----
L7:  Aluno: ana souza | media: 7.9 | aprovado: true
L8:  8 7 8
L9:  10 7.25 1.25
L10: 16 9 32
L11: 9 9 9.99
L12: false true
L13: 21 13 68 4.25 1
```

Onde o pessoal costuma errar:
- **L2:** a contagem começa no 0, então a posição 4 é o "s". E o `indexOf` devolve -1 quando não acha.
- **L4:** o `replace` só troca a **primeira** letra "a" que encontra.
- **L5:** "An" é diferente de "an", porque maiúscula e minúscula contam.
- **L6:** nessa hora `faltas` já vale 4, e não 3.
- **L7:** a média é 7.875, e o `toFixed(1)` arredonda pra 7.9.
- **L11:** `Number("5")` vira o número 5, e 5 + 4 dá 9. O `parseInt` joga fora o que vem depois do ponto.

**e)** Não mudou. O `replace` cria um texto novo e deixa o original como estava. Por isso o segundo valor da L4 ainda é "ana souza".

**f)** Pode sair de 1 a 6. O `Math.random()` sorteia um número de 0 até quase 1 (o 1 nunca sai). Vezes 6, ele fica entre 0 e 5,99… O `Math.floor` arredonda pra baixo, o que dá de 0 a 5. O `+ 1` empurra tudo pra 1 a 6.

**Sugestão de pontuação:** a) 1,0 · b) 1,5 · c) 1,0 · d) 4,5 (0,35 por linha) · e) 1,0 · f) 1,0
