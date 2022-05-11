---
published-by: [[escuelafrontend]]
---

# Cómo funciona JavaScript: Hoisting

En el post anterior sobre expresiones y declaraciones de funciones comente un poco sobre _Hoisting_ y como cambia la manera en la que nuestro código se ejecuta. Veamos en más detalle qué es realmente lo que el intérprete de JavaScript hace para ejecutar nuestro código y asi ententer alguno que otro error habitual.

## ¿Qué es Hoisting?

Hoisting significa **elevación**. Lo que quiere decir es que ciertas partes de nuestro código se elevarán y se ejecutarán antes. veamos el siguiente código:

```js
function obtenerMisArticulos(lista) {
  var articulos = [];
  for (var i = 0; i < lista.length; i++) {
    var elemento = lista[i];
    if (elemento.autor == "Horacio") {
      articulos.push(elemento);
    }
  }
  return articulos;
}
```

Este bloque de código para nuestro intérprete se verán algo como lo siguiente:

```js
function obtenerMisArticulos(lista) {
  var articulos;
  var i;
  var elemento;
  articulos = [];
  for (i = 0; i < lista.length; i++) {
    elemento = lista[i];
    if (elemento.autor == "Horacio") {
      articulos.push(elemento);
    }
  }
  return articulos;
}
```

Como estamos usando el tipo de variable `var`, todas las declaraciones suben al inicio de la funcion en la cual fueron declaradas(\*), guardando en memoria su valor para poder acceder a ellas desde cualquier parte de la función. Todo esto tiene que ver con los **contextos de ejecución**.

## Contextos de Ejecución o "Scope"

Los contextos de ejecución (o _scope_) son creados cada vez que se ejecuta una función. Se crea un scope por cada función. Veamos un ejemplo simple:

```js
function Bienvenida(nombre) {
  var saludo = "Hola " + nombre;
  console.log(saludo);
}

Bienvenida("Lauro"); // 👈🏼 creamos un scope para `Bienvenida`
```

El contexto de ejecución se crea para almacenar las variables que se utilizan dentro de la misma. Hay dos fases en los contextos de ejecución: Fase de **Creación** y fase de **Ejecución**.

En la fase de creación occurren 4 cosas:

- Primero se define el valor de `this` dentro de la función. Podriamos decir que es el "dueño" de la funcion o el objeto que la está ejecutando. En este caso seria `window` (pero en modo "estricto" el valor sería `undefined`).
- Segundo crea un espacio de memoria para `arguments`, que es un objeto de tipo array que almacena todas las variables que le pasamos a la función al ejecutarla.
- Tercero, todos los parámetros pasados se almacenan fuera por su nombre (en nuestro ejemplo, la variable `nombre`), para que podamos utilizarlos por el mismo dentro de la función.
- y Cuarto, **es donde ocurre el Hoisting**, se crea un espacio en memoria para todas las declaraciones de variables de tipo var y se les asigna el valor `undefined` (si, `undefined` es un valor).

En la fase de Ejecución el intérprete irá evaluando línea por línea hasta llegar al final de la función. Lo bueno es que como todas nuestras declaraciones `var` han sido "subidas" al inicio de la función, podríamos utilizar las variables **incluso antes de la línea en la que las declaramos**.

## No solo `var` sufre del hoisting...

Las declaraciones con `var` no son las únicas que sufren el efecto del Hoisting, las declaraciones de funciones tambien son afectadas, de ahí que podemos llamar a estas funciones incluso antes de ser declaradas. A diferencia de las declaraciones con `var` que les asigna el valor `undefined`, las funciones suben por completo.

Todo esto no se podría hacer si usamos una expresión de función en vez de una declaración. En una expresión de función lo que "sube" es justo su declaración y no la función en sí. Hay que tener cuidado con ésto!

```js
saludar("Matías"); // ✅ Válido

function saludar(nombre) {
  var saludo = "Hola " + nombre;
  console.log(saludo);
}

// ------------------

saludar2("Horacio"); // 🚫 No válido

var saludar2 = function saludar(nombre) {
  var saludo = "Hola " + nombre;
  console.log(saludo);
};
```

Otra propiedad que no sufre del Hoisting son las clases en JavaScript. No podemos inicializar una instancia de una clase antes de la declaración de la misma.

```js
var estudiante = new Persona();

class Persona {
  // ...
}

// 🚫 Error!
```

## ¿Qué otras cosas son afectadas por el Hoisting?

- **Módulos estáticos de ECMAScript 2015**: No hay nada que nos impida escribir nuestros `imports` al final de nuestros archivos, pero no es nada recomendable!. Algo que seguro no podemos hacer es importar un modulo dentro de algun otro scope que no sea el global (dentro de otra funcion, otro if, for...)
- **let y const**: Sí, `let` y `const` también son elevadas, pero tienen un tratamiento diferente en cuanto a memoria. Pronto hablaremos de la "Temporal Dead Zone". Por eso es que no podemos acceder al valor de una variable declarada con `let` o `const` porque estan en este "Temporal Deadzone"

---

Lo que me gustaría que recuerdes cuando veas la palabra _Hoisting_ en JavaScript es que tengas claro que la declaración y la inicialización de variables y funciones ocurre en momentos distintos, incluso cuando los escribes en la misma línea.

(\*) - En realidad no es que cambie nuestro código, pero el efecto que ocaciona es el de "subir" las declaraciones
