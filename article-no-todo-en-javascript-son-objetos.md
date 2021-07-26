---
title: "En JavaScript todo NO son objetos"
tags: #tipos-primitivos #javascript [[escuelafrontend]]
---

## Intro

Si alguna vez has escuchado la frase "en JavaScript todo son objetos", **te engañaron**. En JavaScript tenemos por ahora siete (7) tipos de valores primitivos que es importante aprender y saber cómo utilizarlos para evitar errores inesperados en nuestros programas y más importante, sacarle provecho a sus utilidades.

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

Quizás también te preguntes: Si los tipos primitivos no tienen métodos ni propiedades, como es posible que pueda hacer `'holaEscuelaFrontend'.length()` y el motor de JavaScript no se queja? No te preocupes, ya hablaremos de esta peculariedad. Por ahora empezemos a definir cada tipo! (Si no quieres esperar, baja a ["Autoboxing"](#autoboxing-o-object-wrapper))

### `string`

Te sirve para describir cualquier cadena de texto. Para poder representarlo tienes 3 maneras:
- con commillas simples (`'`)
- con comillas dobles (`"`)
- con "backticks" (`\``)

```js
const nombre = 'Horacio'
const nombre = "Horacio"
const nombre = `Horacio`
```

Debes tener en cuenta que a pesar de poder representar textos de tres maneras diferentes, **no debes mezclarlos para describir la misma cadena de texto**.

```js
var nombre = "Horacio' // 🚫

var nombre = "Horacio" // ✅
```

Una ventaja o propiedad de usar los "backticks" es que **puedes interpolar cualquier expresión JavaScript**, ya sean otras variables o operaciones. Para ello necesitas encapsular la expresión dentro de unos corchetes precedidos por el signo `$` (`${<EXPRESION_AQUÍ>}`)

```js
const persona = {
  nombre: "Horacio",
  edad: 33
}
const saludo = `Hola ${persona.nombre}`
const mayorDeEdad = `es ${persona.edad > 18 ? "mayor" : "menor"} de edad`
```

[Más adelante](#autoboxing-o-object-wrapper) veremos porqué podemos llamar funciones a partir de cadenas de texto (`'hola'.toUpperCase()` no da error!), incluso aunque son datos primitivos (se debe al "autoboxing". lo veremos más adelante!).

### `number`

A diferencia de otros lenguajes de programación, en JavaScript solo hay una manera de representar cualquier tipo de número (bueno, realmente no [todos](#bigint)), tanto números enteros como números decimales:

```js
typeof 42     // 'number'
typeof 12.2   // 'number'
typeof -24    // 'number'
```

Los números en JavaScript no se "guardan" exactamente como los escribimos nosotros, esto es mas evidente cuando agregamos decimales a los numeros:

```js
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2 === 0.30000000000000004); // true???
```

Ya se, es raro. Pero lo que realmente esta pasando es que JavaScript esta guardando una "aproximación" al numero que hemos escrito. Podemos comprobar esta aproximación con un valor especial que tenemos acceso en JavaScript:

```js
console.log(Number.MAX_SAFE_INTEGER);     // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 (igual al anterior!)
console.log(Number.MAX_SAFE_INTEGER + 3); // 9007199254740994
console.log(Number.MAX_SAFE_INTEGER + 4); // 9007199254740996
console.log(Number.MAX_SAFE_INTEGER + 5); // 9007199254740996 (el mismo que el anterior!)
```

Una forma de poder resolver o limitar los problemas que te puedan ocacionar estas aproximaciones, es usando la función `toFixed()`, que limita la cantidad de decimales de el numero en cuestión.

```js
const nota = 83.34367890
console.log(nota.toFixed(2)) //83.
```

#### Numero Especiales

Además de `Number.MAX_SAFE_INTEGER`, JavaScript tambien tiene otros números especiales:

- `Number.MAX_SAFE_INTEGER`
- `Number.MIN_SAFE_INTEGER`
- `Number.MAX_VALUE`
- `Number.MIN_VALUE`
- `Infinity`
- `Infinity`
- `0`
- `-0`
- `NaN`: Sí, `NaN` es de tipo "number"

Tenemos estos numeros disponibles porque JavaScript necesita una manera de representar cualquier operación matemática que puedas hacer, incluso aunque sea "imposible" o "errónea", como por ejemplo `1 / 0` (el resultado es `Infinity`).

```js
let valor = 0;
let a = 1 / valor; // Infinity
let b = 0 / valor; // NaN
let c = -a;        // -Infinity
let d = 1 / c;     // -0
```

- TODO: Porque hay `-0` en JS?

Es poco habitual que tengas la necesidad de usar estos números especiales en tus programas, pero uno que seguro te has encontrado es `NaN`. Aunque no parezca un número, si que lo es (puedes comprobarlo ejecutando `typeof(NaN)`, te devolverá "number"). Es un número porque JavaScript necesita una manera de representar el resultado de **una operación inválida** (`NaN` son las iniciales de "Not a Number"), como por ejemplo `0/0`. 

> Un dato curioso de `NaN`, es que **es el único número en JavaScript que no tiene identidad**, lo que ocaciona que nunca será igual a si mismo* (`NaN !== NaN`)

### `boolean`

Este tipo de dato solo permite dos valores: `true` o `false`. Estos valores son habituales usarlos cuando hacemos comparaciones o expresiones en nuestros programas. Dentro de cualquier evaluación (por ejemplo dentro de un `if`) JavaScript convierte el resultade de la evaluación a `boolean`.

> Todas las operaciones que den como resultado `false`, `''`, `0`, `undefined`, `null` y `NaN` resolverán la evaluación a `false`. Todo los demás valores devlverán `true`.

### `null`

Este tipo de valor nos ayuda a representar **la ausencia de valor**. Pero con `null` tenemos un problema: **¿Por qué la ejecución de `typeof null` devuelve `"object"`?** 

**`null` nos engaña**. Así es, es un mentiroso.

Pues eso, `null` sigue siendo un tipo primitivo, pero recibimos "object" por un [error histórico]() en el lenguaje, que seguramente no va a arreglarse jamás (se intentó solucionar, pero de decidió que era mejor no hacer nada porque rompería muchas páginas webs en el intento 🤷🏼‍♂️)

Este tipo de dato se utiliza mucho para determinar **ausencia de valor**. Un ejemplo muy claro es en componentes React:

```jsx

function Button({hide = false, ...props}) {
  return hide ? (
    <button {...props} />
  ) : null // ⬅️ Devolvemos `null` si `hide` es `false`.
}
```

### `undefined`

Se considera como valor de un dato o variable desconocido. Solo hay un valor y solo un valor con este tipo: `undefined`.

Siempre que creamos una variable, el primer valor que se le asigna a esa variable es `undefined` (recuerdas el [hoisting]()?)

- TODO: add hoisting link

### `Symbol`

Este tipo se usa para **crear valores únicos, irrepetibles.**

```js
const valor1 = Symbol()
const sinNew = new Symbol() // 🚫 no se usa la palabra "new"
```

Cuando creamos una variable de tipo `Symbol`, este valor es único, asi que solo ese valor sera igual a sí mismo. Aunque creemos otro símbolo a partir del mismo valor, no seran iguales:

```js
Symbol() === Symbol() // false
Symbol(42) === Symbol(42) // false
Symbol('descripcion') === Symbol('descripcion') // false
```

#### Registro global de Símbolos

Existe un **registro global de simbolos**, en el que podemos crear y recibir el mismo símbolo a partir de la descripción. Además que este registro es compartido en nuestra página, incluso entre los **serviceworkers** y **iframes** que estén en ella.

```js
var simbolo1 = Symbol.for('escuelafrontend') // Crea el símbolo para ésta descripción si no existe

// en otra parte de nuestro programa
var llave = Symbol.for('escuelafrontend')

simbolo1 === llave // true!
```

> Podemos usar tambien el método `Symbol.keyFor()` pasandole el símbolo y descubrir cual es la cadena de texto que lo describe.

#### ¿Para qué puedo usar los Símbolos?

Este tipo no es muy utilizado en nuestros programas, pero si que se utiliza mucho dentro de las líbrerías de frontend que usamos habitualmente. Igualmente este tipo de datos lo puedes usar en algunos casos como los siguientes:

- Para substituir el uso de cadenas de texto como parámetros de una función:

  ```js
  const ACCIONES = {
    ABRIR: Symbol('abrir'),
    CERRAR: Symbol('cerrar')
  }

  function reducerGrifo(accion) {
    if (accion === ACCIONES.ABRIR) {
      console.log('abrir el grifo')
      return
    }

    if (accion === ACCIONES.CERRAR) {
      console.log('cerrar el grifo')
      return
    }

    console.log('acción desconocida')
    return
  }

  // =============

  reducerGrifo(ACCIONES.ABRIR) // abrir el grifo
  reducerGrifo(ACCIONES.CERRAR) // cerrar el grifo

  reducerGrifo('ABRIR') // acción desconocida
  ```
  En este caso, no se puede pasar una cadena de texto a esta función, solo los símbolos del objeto de acciones.

- Para evitar la colisión de atributos de un objeto cuando estemos haciendo comprobaciones sobre el: 

  ```js
  const persona = {
    nombre: 'Horacio',
    apellido: 'Herrera',
  }

  const isLoggedIn = Symbol('esta logado')

  persona[isLoggedIn] = false

  Object.keys(persona) // ["nombre", "apellido"]
  ```

  En este caso vemos que la propiedad creada con el símbolo está "oculta", ya que no aparece cuando hacemos un "lookup" por las propiedades del objeto. Así si el objeto ya tiene o le asignamos una propiedad con el mismo valor (`persona.isLoggedIn`) no creará colisiones de nombres.

### `bigInt`

Este tipo de dato nos permite usar cualquier numero entero **sin límite de tamaño**. Es decir que ya no tenemos la limitacion que encontramos con el tipo "number".

Para poder declarar un valor de tipo `bigint`, necesitamos agregar una `n` al final del número deseado:

```js
const numeroMuyGrande = 123456789n // la "n" al final es importante!
```

En cuanto a operaciones matemáticas, no se permite hacerlas entre diferentes tipos de datos, solo se puede si ambos números son del tipo `bigint`:

```js
const n1 = 67890987654323456789n
const n2 = BigInt(42) // también podemos crearlos a partir del objeto "BigInt"

n1 + 100  // 🚫 INVÁLIDO
n1 + n2   // ✅
```

### `object`

Este no lo he mensionado en la lista, pero hacer la distinción no está de más ;)

Básicamente, **TODO lo que no sea un valor primitivo, es un objeto**. asi que tanto arreglos como funciones son considerados "Objetos". Lo que si es verdad es que podemos considerar los arreglos y las funciones como "sub-tipos de objetos", ya que se comportan como tal, pero tienen propiedades y comportamientos especiales:

```js
const array = [1, 2, 3]
function soyUnaFuncion() {
  // ...
}

typeof array // "object"
typeof soyUnaFuncion // "function" ????
```

El resultado de `typeof Function` no es "object", porque las funciones se consideran "callable objects" o "objetos invocables". por eso es que su "tipo" devuelve el valos "function". Esto aunque parece que es un error, personalmente creo que esto puede ser una ventaja para nuestros programas. lo importante es saberlo, asi podemos sacarle provecho!
## Como podemos sacarle ventaja a los valores primitivos?

Es importante tener estos conceptos claros, porque como mensionaba en la analogía de la comida arriba, **conocer bien las herramientas que tenemos a nuestro alcanze y como funcionan es muy importante para escribir programas de calidad y evitar bugs**, con lo que la mejor manera de sacarles ventaja )desde mi punto de vista), es teniendo en cuenta su funcionamiento para escribir mejor código y que nos permita ahorrar tiempo cuando ocurran errores o bugs (que lastimosamente son inevitables!).

## Autoboxing o "Object Wrapper"

El hecho que podamos llamar a funciones a partir de primitivos, no es porque estos primitivos tienen acceso a esas funciones, sino por lo que se llama "Autoboxing".

**Autoboxing** o **Object Wrapper** ocurre cuando llamamos a un metodo definido en el prototipo relacionado a el primitivo en cuestión.

```js
var saludo = 'Hola escuelafrontend!'
saludo.toUpperCase() // "HOLA ESCUELAFRONTEND!"
```

En el ejemplo de arriba, el método `toUpperCase` esta definido en el prototipo `String`, que esta relacionado con el valor primitivo de `"saludo"`. En el momento que llamas a el método del prototipo, el motor de JavaScript **encapsula el valor del primitivo, ejecuta la función y destruye este objeto utilizado.**

## Desafio

Ahora que ya hemos visto todo lo que necesitamos saber sobre primitivos, pongámoslo en práctica!. Miremos el siguiente código:

```js
var root;
var primero = 20;
var segundo = primero;
primero = 25;

var v1 = segundo / 0;
var v2 = '42';
var v3 = v2 + primero;

var logado = Symbol('logado');
var user = {
  name: 'Horacio',
  logado: true
}
```

Después de que el código se ejecute completamente:

1. ¿Que valor tiene `segundo`: `20`, `25` o `null`?
2. ¿Que valor tiene `v3`: `62`, `"62"` o `"4225"`?
3. ¿Que valor tiene `user.logado`: `true`, `Symbol(logado)` o `false`?

### Puntos Extra

1. Lista todos los valores finales para todas las variables
## Conclusion

Los tipos primitivos son una parte fundamental del lenguaje. Saber qué son, cuales son estos tipos y la diferencia entre ellos te va a ayudar a crear un conocimiento fundacional muy importante para tu futura carrera como desarrollador. Espero que te haya ayudado a entender mejor los tipos primitivos, y que de ahora en adelante lo que muchos describen como "las partes malas de JavaScript", no las vean tan malas y puedas usarlas en tu ventaja.
## Notas

(\*) - Una razon por la cual se dice que `typeof null` devuelve `"object"` es porque todo objeto en JavaScript se deriva de `null`, por eso es que devuelve `"object"` en vez de `"null"` como la regla dice que debería ser. [fuente: MDN](https://developer.mozilla.org/en-US/docs/Glossary/Null)

## Referencias

[Este video](https://www.youtube.com/watch?v=cC65D2q5f8I) me ayudó MUCHO para refrescar todo lo que te he comentado arriba!. ULTRA recomendable!