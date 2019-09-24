# Desafio 1: Strings

## Processo de resolução
É inserida palavra por palavra na linha, quando uma passa o limite, conta-se a quantidade de caracteres que faltam para preencher até o limite e completa com espaços.
A solução ficou em O(n).

## Como utilizar
```
npm install
npm start arg1 arg2 arg3
```
Foi usado o mesmo template de Java. Ou seja, os argumentos são:
- Primeiro: string, que é o texto. O default ẽ o mesmo do desafio.
- Segundo: int, é o limite da linha. O default é 40.
- Terceiro: boolean, se o texto é pra ser justificado ou não. O default é true.

## Tratamento de erros e exceções
Também foi tratado os casos em que alguma palavra é maior que o limite da linha e a entrada que tenha mais de 3 parämetros.

## Docker
Foi usado.
