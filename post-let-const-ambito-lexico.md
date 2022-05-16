# `let`, `const` y el ámbito léxico

Mientras vamos progresando en nuestra carrera profesional como programadores JavaScript, vamos aprendiendo sobre muchos temas y conceptos sobre las herramientas y técnicas que usamos para crear productos o apps. Una de las cosas que me he dado cuenta es que si este conocimiento no es sólido, es más difícil resolver errores.

Ciertamente aprender sobre los origenes de cualquier herramienta que usamos no nos limita a la hora de usarlas, pero sí que nos ayuda a poder usarlas de la manera más correcta, a resolver cualquier error que nos salga por el camino y lo más importante, evitar futuros errores.

<FOTO Y TWEET SOBRE VAR LET Y CONST>

Me gusta comparar var, let y const martillos. No necesitas leerte un manual de la historia de un martillo para empezar a usarlo, pero si que es util saber Qué tipo de martillo funciona mejor para según la situación, o corres el riesgo de pillarte un dedo por el camino 😅

## La importancia de la encapsulación

Un programa en donde todas las variables son globales o accesibles en cualquier sitio está mal visto, y con mucha razón. Si dependemos de variables globales en nuestro código, es más fácil sobreescribirlas y hace muy complejo el mantenimiento del mismo. No hay nada de malo en las variables globales, pero si el depender de ellas para todo, son útiles en algunos casos concretos.

Antes de que se introdujeran los tipos de variables `let` y `const`, usábamos nuestro viejo amigo `var`. Las variables de tipo `var` son accesibles en el ámbito de función en el que fueron creadas, o cualquier otro ámbito hijo y la única manera que teníamos en JavaScript para poder encapsular variables era usando funciones.

Una de las formas más usadas y habituales era creando funciones que se ejecutaban a sí mismas, o IIFEs (Inmediately Invoked Function Expression)

```js
var contador = (function soyUnaIIFE() {
  var miValor = 0;

  function sumar() {
    miValor += 1;
  }

  function valor() {
    return miValor;
  }

  return {
    sumar,
    valor,
  };
})();

contador.sumar();
contador.sumar();
contador.sumar();
contador.valor(); // 3
console.log(miValor); // ReferenceError: miValor is not defined
```

En el ejemplo anterior, `contador` es asignado a lo que devuelve la funcion `soyUnaIIFE`, que en este caso es un objeto con dos funciones. Como la variable `miValor` está creada dentro de `soyUnaIIFE`, no puede ser accesible en ningún otro sitio.

Se entiende porqué las funciones forman un ámbito. Pero, por qué necesitamos más granularidad para definir ámbitos?

## Entre menos exposición, más seguro

Al limitar la expocisión de variables al ámbito en el cual tienen que ser usadas, reducimos los errores y problemas que puede ocacionar, como por ejemplo colisión de nombres, dependencias innecesarias, uso inesperado de variables por terceros.

Un caso concreto en el que el ámbito de funciones no es suficiente, es cuando asignamos eventos dentro de un for loop:

```js
/* codesandbox: https://codesandbox.io/s/var-y-let-en-for-loops-k3vvqp?file=/src/index.js */

document.body.innerHTML = \`
<h1>Hola Mundo</h1>
<div>
  <button id="button1">button1</button>
  <button id="button2">button2</button>
  <button id="button3">button3</button>
</div>
\`;

init();

function init() {
  var btns = document.querySelectorAll("button");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      console.log(i);
    });
  }
}
```

> Ves que la función `init` la estoy llamando antes de que sea declarada? esto es gracias a el concepto de Elevación o _Hoisting_. Si quieres aprender sobre el, léete [este](https://www.escuelafrontend.com/articulos/hoisting-javascript) o [este](https://www.escuelafrontend.com/articulos/hoisting-ejemplos-practicos) artículo en donde lo explicamos con más detalle.

Lo que esperaríamos es que al clicar en cada uno de los botones, es ver en la consola el valor de `i` en el momento que asignamos el listener, pero vemos que no es asi. Vemos el valor de `i` despues de recorrer todo el loop.

Con la llegada de ES2015, se introdujeron los nuevos tipos de variable `let` y `const`, que su ámbito léxico no se limita a las funciones, sino a los bloques. Un bloque es cualquier parte de nuestro programa que que este delimitada por los corchetes (`{ }`). Esto nos ayuda a resolver el problema del código anterior, simplemente cambiando el tipo de variable de `i` a `let`:

```js
/* codesandbox: https://codesandbox.io/s/var-y-let-en-for-loops-k3vvqp?file=/src/index.js */

document.body.innerHTML = \`
<h1>Hola Mundo</h1>
<div>
  <button id="button1">button1</button>
  <button id="button2">button2</button>
  <button id="button3">button3</button>
</div>
\`;

init();

function init() {
  var btns = document.querySelectorAll("button");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      console.log(i);
    });
  }
}
```

## Ciclo de vida de una variable

Seguramente has leído lo que let y const pueden hacer en algun otro sitio, pero voy a intentar explicar por qué es así explicando el ciclo de vida de las variables.

En nuestros programas, podemos hacer dos cosas con las variables: declararlas y asignarles valores.

```js
var saludo; // Declaración

saludo = "Hola!"; // Asignación

var otroSaludo = "Buenas!"; // Declaración y Asignación, todo en una misma línea
```

Con una variable como `var`, tanto la declaración como la asignación de valor es permitido en cualquier parte de dentro de su ámbito léxico. Esto puede crear confusión y errores ya que podemos cambiar su valor en cualquier sitio haciendo más difícil encontrar cualquier error. Por eso con `let` y `const` no es permitido declararla más de una vez dentro de su ámbito léxico

```js
var a = 21;
var a = "hola"; // válido

let b = 42;
let b = "que tal"; // SyntaxError: Identifier 'b' has already been declared.
```

Cuando introducimos diferentes ámbitos de bloque, tanto let como const se tratan como variables distintas

```js
function varTest() {
  var x = 1;
  {
    var x = 2; // misma variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // variable distinta!
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

como el ámbito de let y const se limitan a los bloques, cada vez que declaramos una variable cualquiera de estos tipos dentro, creamos una nueva, no reutilizamos otra de un ámbito superior, como pasa con `var`. No confundamos
