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

Al limitar la exposición de variables al ámbito en el cual tienen que ser usadas, reducimos los errores y problemas que puede ocacionar, como por ejemplo colisión de nombres, dependencias innecesarias, uso inesperado de variables por terceros.

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

Podría seguir escribiendo sobre let y const y sobre su creación, pero no me parece demasiado práctico ni efectivo para el tiempo que le estás dedicando a leer este artículo, asi que vamos al grano.

1. `let` y `const` sólo se pueden declarar una sola vez
2. `const` No se puede reasignar (pero no es una constante)
3. `let` y `const` NO se pueden usar antes de ser declaradas (Temporal Dead Zone)

### 1. `let` y `const` sólo se pueden declarar una sola vez

`let` y `const` solo permiten ser declaradas una sola vez en su ámbito léxico. A diferencia de nuestro viejo amigo `var`, que es más permisivo.

```js
var a = 21;
var a = "hola"; // válido

let b = 42;
let b = "que tal"; // SyntaxError: Identifier 'b' has already been declared.

const c = "84";
const c = "que tal"; // SyntaxError: Identifier 'c' has already been declared.
```

Cuando introducimos diferentes ámbitos de bloque, tanto `let` como `const` se tratan como variables distintas

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

como el ámbito de `let` y `const` se limitan a los bloques, cada vez que dentro de un bloque declaramos una variable cualquiera de estos tipos, creamos una nueva, no reutilizamos otra de un ámbito superior, como pasa con `var`. Esto es lo que se le llama **Shadowing**. También pasa con `var`

```js
var saludo = "hola"; // ambito global

function saludar() {
  var saludo = "que tal"; // <== Shadowing!
  return saludo + " Mundo!";
}

saludar(); // "que tal Mundo!"
```

La razón por la que no se pueden re-declarar es para evitar problemas en los que otras partes (tanto internas como externas) de tus apps puedan ocasionar al cambiar directa o indirectamente cualquier variable que estes usando. No queremos que alguien pueda cambiar el tipo de una variable cuando esperamos otro...

### 2. `const` No se puede reasignar (pero no es una constante)

Su nombre puede ser malinterpretado, pero `const` no se refiere a que estamos declarando una constante, sino que el valor en memoria al que esta variable apunta no se puede cambiar dentro del ciclo de la misma. Por si cguargamos un objeto o un arreglo en una variable de tipo const, es permitido modificarlo pero no reasignarlo:

```js
const usuario = { nombre: "Horacio" };
usuario.apellido = "Herrera"; // ✅
usuario = { nombre: "Maria" }; // ❎ TypeError: Assignment to constant variable.

const numeros = [2, 4, 6, 8];
numeros.push(10); // ✅
numeros = [1, 3, 5]; // ❎ TypeError: Assignment to constant variable.
```

Una de las razones principales que verás por las que muchos developers usan `const` para todo es porque al usarla, mostramos la intención de no cambiarla a otros developers que vean tu código. Puede parecer muy razonable esta razón, pero creo firmemente que no está fundamentada en el uso correcto de la misma. Veamos el siguiente ejemplo:

```js
function getNames(userList) {
  return userList.map(function predicate(user) {
    const nombre = user.name;
    return nombre;
  });
}
```

La variable `nombre`, independientemente de pueda o no ser cambiada, en el unico sitio en el que podría ser cambiada es entre `const nombre = user.name` y `return nombre` (que es literalmente media línea). En este caso, es seguro usar tanto let como var (porque ambos ámbitos léxicos son pequeños)

### 3. `let` y `const` NO se pueden usar antes de ser declaradas (Temporal Dead Zone)

Seguro has escuchado hablar del Temporal Dead Zone, y todo es culpa de `const`. Como `const` no puede ser re-asignada, tanto la declaración como la asignación tiene que pasar al mismo tiempo. Si con `const` pasara lo mismo que pasa con `var` en el proceso de compilación (las variables y declaraciones de funciones son "elevadas" o Hoisting), o se cumpliría la regla que no se puede re-asignar, ya que el primer valor que tendría sería `undefined`. `let` sufre de lo mismo porque, bueno, al ser introducidas al mismo tiempo, tenía más sentido (Obviamente no es exactamente esto, pero estor parafraseando un poco para no hacer este post aburrido 😅)

### 4. `let` y `const` también son elevadas

Puede que por tener ámbitos más "pequeños" (bloques) se tenga la falsa idea que no son elevadas como `var`, pero si que lo son. es importante tener esto en cuenta para cuando combinamos multiples ámbitos y tenemos ámbitos hijos.

## Desafío!

Ahora con las reglas refrescadas, veamos un simple ejemplo para poder solidificar conceptos:

```js
loop();

function loop() {
  var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (var i = 0; i < values.length; i++) {
    setTimeout(() => {
      var value = i + 1;
      console.log("Voy por el elemento #" + value);
    }, 1);
  }
}
```

- [ ] ¿Qué debes modificar en esta función para que en la consola te salgan todos los números del arreglo `values`?

## Conclusión

Es importante saber qué tipo de herramientas tenemos cuando estamos creando nuestros programas. De esta manera evitamos usar herramientas erróneas en situaciones erróneas. Así como existen diferentes tipos de martillos para diferentes tipos de acciones, `var`, `let` y `const` son tres herramientas diferentes, que ninguna reemplaza a la otra, que debemos saber su función y cómo usarlas.

Sé que algunas de las cosas que viste en el post pueden ser algo controversiales para la manera habitual en la que se usan o enseñan, mi objetivo es tratar de explicar los fundamentos para que puedas crear TU criterio y poder tomar decisiones mejor formadas en el futuro.

A programar!
