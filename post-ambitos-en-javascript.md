---
title: Ámbitos en JavaScript
---

porque debo aprender sobre los ámbitos de Javascript?

Primero aclarar, que JavaScript no es un lenguaje interpretado como bash, sino que es **compilado**. Si no estas familiarizado con la diferencia te doy una breve explicacion:

Un lenguaje Interpretado, si en la linea 7 tiene un error, las lineas de la 1 a la 6 se ejecutaran independientemente del error en la linea 7. En un lenguaje compilado hay generalmente tres fases: Lexing o Tokenizado, parseo y generacion de codigo. Si existe un error en la fase de tokenizacion o parseo, el programa no ejecutara ninguna linea de codigo. Asi que cuando te encuentres un error de tipo `ReferenceError`, te acordaras que JavaScript ha lanzado un error de compilacion ;)

> A diferencia de un lenguaje compilado tradicional, El proceso de lexing y parsing en JavaScript pasa usualmente justo antes de la ejecución del mismo. esto quiere decir que muchos trucos para optimizar la compilación de código no son posibles de implementar ni sacarles provecho.

## Qué son los Ámbitos en javascript

Es la forma en la que JS sabe que variables son accesibles para cada expresion del programa, y la gestion de las mismas. En otras palabras, un ámbito o *scope* es cualquier seccion de codigo en la que esta delimitada por dos corchetes `{}`, **siempre y cuando haya alguna asignacion a alguna variable dentro.**

La fase en la que se crean los ámbitos es en el parseo o *parsing*. La mejor forma de entenderlos es intentar pensar como el compilador de JavaScript. Veamos un ejemplo:

```js
var a = 3

function hello(b) {
  var a = 2
  console.log(a, b)
}

hello(1) // 2, 1
```

Voy a intentar describir el proceso de parseo de este programa para poder pensar como el compilador y entenderlo mejor:

- lo primero que vemos es `var a = 3`. Esto resulta en la creacion de una variable en el ámbito global llamada `a`. la asignacion del valor la hacemos en otro proceso.
- luego lo siguiente que vemos es `function hello(b)...`, Y esto resulta en lo mismo, una variable de tipo funcion en el ámbito global llamada `hello`. Al ser una variable de tipo funcion, **creamos un nuevo ámbito** y pasamos a definit las variables dentro del mismo
- aquí hay una creacion implícita de una variable, que es el parámetro definido en `hello`. Esta variable, al ser un parametro de `hello`, es creada en el nuevo ámbito de la función.
- dentro de `hello` vemos `var a = 2`, Esto resulta en la creacion de una variable en el ámbito de `hello` llamada `a`.

Las demas lineas de codigo no asignan ni definen variables, asi que el proceso de parseo y definicion de ámbitos ha acabado.

Detengamos un momento la explicacion general de los ámbitos para hablar de una serie de detalles importantes sobre lo que acaba de pasar. Está claro que en este programa tenemos dos variables con el mismo valor. Como ambas variables están definidas en diferentes ámbitos, **No existe ningun tipo de colisión cundo vamos a acceder a esas variables** (ver el resultado de la ejecución de `hello`). El valor `3` nunca se verá en el resultado de la ejecución de `hello` porque la variable `a` que esta dentro "oculta" el valor de `a` en el scope global. Esto se le conoce como **"shadowing"**.

> Los diferentes procesos de parseo y ejecuciñon de nuestros programas esta muy relacionado con lo que describimos como [Hoisting](). En realidad Hoisting no existe, es la manera en la que explicamos que `var a = 2` se divide en `var a` (creación de la referencia) y `a = 2` (asignación de valor a la referencia).

## Encontrando referencias o "look-up"

Una vez nuestro programa esté parseado, podemos estar seguros que todos los ambitos y referencias a variables estan definidos en sus respectivos lugares. Ahora veamos cómo funciona la ejecución de nuestro programa por parte del motor o *engine* de JavaScript. Partimos del mismo programa:

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

Cuando ejecutamos `var a = 3`, lo que estamos pidiendo es una referencia de tipo **target**, ya que le vamos a asignar un valor. En cambio, cuando ejecutamos la linea `hello(1)`, la referencia que estamos buscando es de tipo **source**. Podemos decir que la referencia a `a` se busca en el lado Izquierdo (Left-hand Side look-up) y `hello(1)` se busca del lado Derecho (Right-hand Side look-up). Supongo que puedes deducir que se llaman asi por el lado en el que esten con respecto al simpobo `=`.

### Errores de Búsquedas

Dependiendo del tipo de búsqueda que estemos haciendo, obtendremos diferentes errores en la ejecución del programa, ahora veremos dos tipos de errores: `ReferenceError` y `TypeError`

#### `ReferenceError`

Cuando obtenemos este tipo de error, es porque el motor de JavaScript no ha encontrado esa referencia en el ámbito actual, **ni en ninguno de los ámbitos que encapsulan el ámbito actual**. Esto Expone otro mecanismo importante sobre el funcionamiento de los ámbitos y búsqueda de referencias:

> Si una referencia no se encuentra en el ámbito actual, la busqueda continúa en el ámbito padre hasta llegar a el ámbito global

Veamos un ejemplo:

```js
'use strict'

var saludo = 'Hola'

function saludar() {
  console.log(saludo, nombre)
}

saludar()
```

Cuando ejecutamos la línea `console.log(saludo, nombre)` no encontraremos la referencia a `saludo` en el ámbito de la función `saludar`, con lo que pasamos al ámbito padre y seguimos buscando. El ámbito padre de `saludar` es el global, y la referencia a saludo si que existe. En el caso de la referencia `nombre`, es de tipo *source* y no se encuentra en ninguno de los ámbitos del programa, asi que recibiremos el error `ReferenceError: nombre is not defined`.

Recibiremos este error en nuestra aplicación porque estamos ejecutando el programa en modo estricto (gracias al pragma encontrado en la primera línea de nuestro programa `use strict`). Si ejecutamos el mismo programa si el pragma, no obtendriamos el error porque **el ámbito global creara la referencia por tí.** Cabe mensionar que es "raro" encontrarse con este error en concreto ahora ya que muchos de los sistemas que usamos actualmente esperan que JavaScript se ejecute en modo estricto, y los transpiladores actuales (babel, webpack) agregan el pragma por ti.

#### TypeError

Este error lo veremos cuando queremos hacer una acciñon sobre alguna referencia que es imposible de hacer. como por ejemplo ejecutar una variable de tipo string como función

```js
var a = 'Hola!'

a('Horacio') // TypeError!
```

## Desafío

Mira el siguiente programa y responde a las siguientes preguntas:

```js
function duplica(a) {
	var b = a;
	return a + b;
}

var c = duplica( 2 );
```





- el motor al ver `var a = 3`, le pregunta al gestor de Ámbitos ¿Tienes alguna variable llamada `a` en el ámbito global? Y como hemos definido esta variable en el proceso de parseo en el ámbito global, podemos seguir ejecutando el programa sin problemas.
- ahora pasamos a `hello(1)`, y el motor le pregunta al gestor de ámbitos ¿Tienes alguna 






- js es un lenguaje compilado
  - fases
- que es
- ejemplos
- formas de crear nuevos ámbitos
  - funciones
  - bloques
- porque es importante
  - debugging
    - explicar errores: ReferenceError y TypeError
  - entender closures

- js es un lenguaje compilado
  - probarlo con el error Syntax Error
- procesos de un lenguaje compilado
  - lexing/tokenization
  - parsing
  - code generation
- tipos de ámbitos o scopes
  - funciones
  - bloques
- proceso de como se crean los ámbitos (buckets and marbles)
  - usar este codigo:
    
    ```js
    var profesor = 'Matias'

    function nuevClase() {
        var profesor =  'Lauro'
        console.log('escuelaFrontend!', profesor)
    }

    function preguntar() {
        var pregunta = 'Seguro?'
        console.log(pregunta)
    }

    nuevaClase()
    preguntar()
    ```

  - actores: compiler y scope manager
  - explicar shadowing (dos variables en nested scopes con el mismo nombre)
  - explicar porque pasamos los console.logs (no creamos ni accedemos a ninguna variable o ámbito extra)
- los ámbitos son definidos cuando se escribe nuestro codigo, osea el autor del codigo lo define.
- una vez todo el plan de ámbitos esta creado por el compilador, pasamos a la fase de ejecucion de nuestro programa, que la hace el JS Engine.
  - las declaraciones de funciones en esta fase podemos decir que "no existen", porque ya fueron parseadas y definidas en el proceso anterior (parsing), solo se toman en cuenta las lineas de codigo ejecutables.
- hay dos tipos de referencias: "target" y "source".
  - target es cuando recibira un valor: `var teacher = 'hello'`
  - source es cuando queremos obtener su valor: `otherClass()` (ira a buscar el valor de `otherClass` para ejecutarlo)
- referencias de tipo source que no son encontradas, siempre devulven el error "ReferenceError"