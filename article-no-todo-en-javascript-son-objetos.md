---
title: "En JavaScript todo NO son objetos"
tags: #tipos-primitivos #javascript [[escuelafrontend]]
---

## Intro

Si alguna vez has escuchado la frase "en JavaScript todo son objetos", te engañaron. En JavaScript tenemos por ahora siete (7) tipos de valores primitivos que es importante aprender y saber cómo utilizarlos para evitar errores inesperados en nuestros programas y más importante, sacarle provecho a sus utilidades.

## ¿Por qué debo aprender de Tipos Primitivos?

Los tipos primitivos son una parte fundamental del lenguaje. No conocerlos o no saber como utilizarlos es como decir "Tengo que consumir comida saludable" sin saber que alimentos son saludables para ti y tu organismo. Saber qué son, cuales son estos tipos y la diferencia entre ellos te va a ayudar a crear un conocimiento fundacional muy importante para tu futura carrera como desarrollador.

Otra razón por la cual es ventajoso aprender sobre tipos primitivos es por la naturaleza dinamica de JavaScript con respecto al tipado o lo que le llamamos _coerción_. Ver la coerción como algo a lo que sacarle provecho y no **una debilidad** es importante!

## ¿Qué son los Tipos Primitivos?

Los Tipos Primitivos en JavaScript **son tipos de datos que no poseen métodos ni propiedades**. Además los valores con estos tipos **son inmutables**, que quiere decir que al asignar una variable a un valor primitivo, cambiar su valor implica reasignarle un valr nuevo, ya que este valor inicial no se puede modificar, simplemente se substituye con el nuevo valor.

Como mensioné arriba, tenemos siete (7) tipos primitivos en JavaScript por el momento: **string, number, boolean, null, undefined, Symbol y bigint**.

JavaScript nos permite saber el tipo de una variable o valor con el método `typeof`. Éste método siempre te devolvera un string con el nombre del tipo de valor que le hayas pasado:

```js
typeof "hola!" // "string"
typeof 42 // "number"
typeof true // "boolean"
typeof null // "object" ???
typeof undefined // "undefined"
typeof Symbol // "symbol"
typeof 23n // "bigint"
```

Sí, ya se que `null` no devuelve "lo que debería" (`"null"`). Esto se debe a un bug histórico(\*) en el lenguaje que no se puede resolver y lastimosamente tenemos que vivir con ello.

Quizás también te preguntes: Si los tipos primitivos no tienen métodos ni propiedades, como es posible que pueda hacer `'holaEscuelaFrontend'.length()` y el motor de JavaScript no se queja? No te preocupes, ya hablaremos de esta peculariedad. Por ahora empezemos a definir cada tipo!

### `string`

### `number`

### `boolean`

### `null`

### `undefined`

### `Symbol`

### `bigInt`

### `object`

Este no lo he mensionado en la lista, pero hacer la distinción no está de más ;)

## Diferentes estados de una variable

- undefined vs undeclared
  - undeclared: esta variable no ha sido declarada
  - undefined: esta variable ha sido declarada pero no se le ha asignado ningun valor
  - uninitialized (Temporal Dead Zone): no son inicializadas, no se pueden usar antes de ser inicializadas

## Como podemos sacarle ventaja a los valores primitivos?

## Autoboxing o "Object Wrapper"
## Desafio


## Credito Extra

## Conclusion

## Notas

(\*) - Una razon por la cual se dice que `typeof null` devuelve `"object"` es porque todo objeto en JavaScript se deriva de `null`, por eso es que devuelve `"object"` en vez de `"null"` como la regla dice que debería ser. [fuente: MDN](https://developer.mozilla.org/en-US/docs/Glossary/Null)
