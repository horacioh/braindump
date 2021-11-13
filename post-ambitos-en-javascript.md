---
title: Los Ámbitos en JavaScript en profundidad
---

Si el titulo de éste post ye ha llamado la atención, puedo asumir que estas familarizado con conceptos bássicos de programación como crear variables y funciones. Conceptos básicos pero super importantes! 👏🏼

Ahora bien, alguna vez te has preguntado cómo JavaScript organiza y gestiona estas declaraciones y cómo sabe donde encontrar todo? Esto es lo que voy a describir en este artículo.

## ¿Por qué debo aprender sobre los ámbitos de Javascript?

Te soy sincero, aprender sobre los ámbitos no te va a hacer programar mejor, lo que va a hacer es ayudarte a entender mejor el lenguaje y lo más importante, ayudarte a **solucionar problemas en tus programas y descifrar mejor y más rápido errores que te puedas encontrar**. Yo lo veo como una ventaja bastante grande!

## Compilado vs Interpretado

Si no estas familiarizado con la diferencia te doy una breve explicacion:

Un lenguaje Interpretado, si en la linea 7 tiene un error, las lineas de la 1 a la 6 se ejecutaran independientemente del error en la linea 7. En un lenguaje compilado hay generalmente tres fases: Lexing o Tokenizado, parseo y generacion de codigo. Si existe un error en la fase de tokenizacion o parseo, el programa no ejecutara ninguna linea de codigo. Asi que cuando te encuentres un error de tipo `ReferenceError`, te acordaras que JavaScript ha lanzado un error de compilacion ;)

Actualmente un lenguaje de programación como JavaScript no se puede considerar como Compilado o Interpretado, ya que los navegadores modernos utilizan ambos procesos para poder optimizar la ejecución del mismo. Gracias a [Esta conversación](https://twitter.com/hhg2288/status/1449806338444386312) que tuve con [Matías](https://twitter.com/matiasfha) y [Brendan](https://twitter.com/BrendanEich) pude aclararlo! (Gracias a ambos!)

> A diferencia de un lenguaje compilado tradicional, El proceso de lexing y parsing en JavaScript pasa usualmente justo antes de la ejecución del mismo. esto quiere decir que muchos trucos para optimizar la compilación de código no son posibles de implementar ni sacarles provecho.

## ¿Qué son los Ámbitos en javascript?

Es la forma en la que JS sabe que variables son accesibles para cada expresion del programa, y la gestion de las mismas. En otras palabras, un ámbito o _scope_ es cualquier sección de código que está delimitada por dos corchetes `{}`, **siempre y cuando haya alguna asignacion a alguna variable dentro.** Los ámbitos en un programa son creados basados en lo que el autor del código ha decidido, es decir que el autor es quien define los ámbitos que tendrá el programa cuando los escribe.

La fase en la que se crean los ámbitos es en el parseo o _parsing_. La mejor forma de entenderlos es intentar pensar como un compilador de JavaScript.Veamos un ejemplo:

```js
var a = 3

function hello(b) {
  var a = 2
  console.log(a, b)
}

hello(1) // 2, 1
```

- lo primero que vemos es `var a = 3`. Esto deriva en la creación de una variable llamada `a` en el **ámbito global**. la asignación del valor la hacemos en otro proceso.
- luego lo siguiente que vemos es `function hello(b)...`, Y esto deriva en lo mismo, una variable de tipo función llamada `hello`en el ámbito global. Al ser una variable de tipo funcion, **creamos un nuevo ámbito** y pasamos a definir las variables dentro del mismo
- aquí hay una creacion implícita de una variable, que es el parámetro definido en la función `hello`. Ésta variable al ser un parámetro de `hello`, es creada en el nuevo ámbito de la función.
- dentro de `hello` vemos `var a = 2`, Esto resulta en la creación de una variable llamada `a` **en el ámbito de `hello`**.

Las demas lineas de codigo ni asignan ni definen variables, asi que el proceso de parseo y definicion de ámbitos ha acabado.

Detengamos un momento la explicacion general de los ámbitos para hablar de una serie de detalles importantes sobre lo que acaba de pasar. Está claro que en este programa tenemos dos variables con el mismo valor. Como ambas variables están definidas en diferentes ámbitos, **No existe ningun tipo de colisión cuando vamos a acceder a esas variables** (ver el resultado de la ejecución de `hello`). El valor `3` nunca se verá en el resultado de la ejecución de `hello` porque la variable `a` que esta dentro "oculta" el valor de `a` en el scope global. Esto se le conoce como **shadowing**.

Los diferentes procesos de parseo y ejecución de nuestros programas esta muy relacionado con lo que describimos como [Hoisting](https://www.escuelafrontend.com/articulos/hoisting-javascript). En realidad Hoisting no existe, es la manera en la que explicamos que `var a = 2` se divide en `var a` (creación de la referencia) y `a = 2` (asignación de valor a la referencia).

> Aclaro que éste proceso es uno de muchos procesos que actualmente pasan cuando se ejecuta nuestro código, está simplificado bastante para poder explicar los puntos más importantes y que el artículo no sea eterno!

## Encontrando referencias o "look-up"

Una vez nuestro programa esté parseado, podemos estar seguros que todos los ambitos y referencias a variables estan definidos en sus respectivos lugares. Ahora veamos cómo funciona la ejecución de nuestro programa por parte del motor o _engine_ de JavaScript. Partimos del mismo programa:

```js
var a = 3

function hello(b) {
  var a = 2
  console.log(a, b)
}

hello(1) // 2, 1
```

### Tipos de Referencias

En esta fase, podemos decir que todas declaraciones de funciones son "invisibles", asi que lo unico que vera el motor de JavaScript sera lo siguiente:

```js
var a = 3

hello(1) // 2, 1
```

Cuando ejecutamos `var a = 3`, lo que estamos pidiendo es una referencia de tipo **target**, ya que le vamos a asignar un valor. En cambio, cuando ejecutamos la linea `hello(1)`, la referencia que estamos buscando es de tipo **source**. Podemos decir que la referencia a `a` se busca en el lado Izquierdo (Left-hand Side look-up) y `hello(1)` se busca del lado Derecho (Right-hand Side look-up). Supongo que puedes deducir que se llaman asi por el lado en el que estén con respecto al símbolo `=`.

### Errores de Búsquedas

Dependiendo del tipo de búsqueda que estemos haciendo, obtendremos diferentes errores en la ejecución del programa, ahora veremos dos tipos de errores: `ReferenceError` y `TypeError`

#### `ReferenceError`

Cuando obtenemos este tipo de error, es porque el motor de JavaScript no ha encontrado esa referencia en el ámbito actual, **ni en ninguno de los ámbitos que encapsulan el ámbito actual** o ámbitos padre. Esto Expone otro mecanismo importante sobre el funcionamiento de los ámbitos y búsqueda de referencias:

> Si una referencia no se encuentra en el ámbito actual, la búsqueda continúa en el ámbito padre hasta llegar a el ámbito global

Veamos un ejemplo:

```js
"use strict"

var saludo = "Hola"

function saludar() {
  console.log(saludo, nombre)
}

saludar()
```

Cuando ejecutamos la línea `console.log(saludo, nombre)` no encontraremos la referencia a `saludo` en el ámbito de la función `saludar`, con lo que pasamos al ámbito padre y seguimos buscando. El ámbito padre de `saludar` es el global, y la referencia a saludo si que existe. En el caso de la referencia `nombre`, es de tipo _source_ y no se encuentra en ninguno de los ámbitos del programa, asi que recibiremos el error `ReferenceError: nombre is not defined`.

Recibiremos este error en nuestra aplicación porque estamos ejecutando el programa en modo estricto (gracias al pragma encontrado en la primera línea de nuestro programa `use strict`). Si ejecutamos el mismo programa si éste pragma, no obtendriamos el error porque **el ámbito global creara la referencia por tí.** Cabe mensionar que es "muy raro" encontrarse con este error actualmente ya que muchos de los sistemas que usamos asumen que JavaScript se ejecute en modo estricto, y los transpiladores actuales (babel, webpack, rollup) agregan el pragma por tí.

#### TypeError

Este error lo veremos cuando queremos hacer una acción sobre alguna referencia que es imposible de hacer, como por ejemplo ejecutar una variable de tipo string como función

```js
var a = "Hola!"

a("Horacio") // TypeError!
```

Tanto `ReferenceError` como `TypeError` son errores muy comunes de ver al programar con JavaScript, saber porque se originan te ayudará a identificarlos y resolverlos más rápido. Lo siguiente que veremos será cómo afecta los ámbitos a las nuevas tipos de variables `let` y `const`, pero esto lo dejo para otro artículo!

## Desafío

Mira el siguiente programa y responde a las siguientes preguntas:

```js
var profesora = "Leira"

function nuevaClase() {
  var profesora = "Claudia"
  console.log(`Bienvenida, ${profesora}`)
}

function preguntar() {
  var pregunta = "Segura"
  console.log(`${pregunta} ${profesora}?`)
}

nuevaClase()
preguntar()
```

1. ¿Cuál es el resultado de la ejecución de `nuevaClase`?
2. ¿Cuál es el resultado de la ejecución de `preguntar`?
3. ¿Qué ocaciona la definición de `var profesora = "Claudia"` dentro de la función `nuevaClase`?
4. ¿Qué error obtenemos al borrar la línea `var pregunta = "Segura"` de la función `preguntar`?
5. Enumera cuántos ámbitos existen en este programa

## Conclusiones

Aprender sobre los ámbitos en JavaScript nos ayuda a "pensar" como los sistemas que ejecutan nuestro código, ayudándonos a entender mejor el proceso y encontrar soluciones a errores y problemas fácilmente y más rápido. Ser más conscientes de estos conceptos nos ayuda tambien a tomar mejores decisiones sobre cómo organizar y modelar nuestro código.

## Otros Recursos

- [Kyle Simpson]() ha dedicado [un libro completo a los ámbitos](), Eternamente recomendado!
- aquí tienes [un vídeo](https://www.youtube.com/watch?v=s-7C09ymzK8) de [La cocina del Código](https://www.youtube.com/channel/UCY2ogSxB2beBNBRMKU_dXzA) muy interesante también
