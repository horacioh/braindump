# Diferencia entre declaraciones de funciones y expresiones de funciones

Veamos el siguiente código:

```js
function suma1(a, b) {
  return a + b
}

var suma2 = function (a, b) {
  return a + b
}
```

¿Puedes decir las diferencias? Seguramente has creado funciones de ambas maneras pero, ¿Sabes cuándo usar una o la otra?

## Hablemos de Hoisting

Cuándo nuestro código JavaScript se ejecuta, em intérprete mueve todas las declaraciones de nuestro programa al inicio del todo. Veamos un ejemplo:

```js
var nombre = "Rick"
var apellido = "Sanchez"
function nombreCompleto(primero, segundo) {
  return `${primero} ${segundo}`
}
var pintarEdad = function (numero) {
  console.log(`la edad es de ${numero} años`)
}
```

En el bloque de código anterior podemos ver tanto declaraciones de variables como asignaciones de valores. y ambas cosas realmente pasan en momentos separados. El intérprete de JavaScript lo que realmente hace es **declarar todas las variables y funciones primero antes de asignar y ejecutar cualquier otro valor.** Si quisieramos ver el orden real en el que se van ejecutando cada cosa, sería algo asi:

```js
// declaraciones primero
var nombre;
var apellido;
function nombreCompleto(primero, segundo) {
    return `${primero} ${segundo}`
}
var pintarEdad;

// asignaciones después
nombre = "Rick"
apellido = "Sanchez"
pintarEdad = function(numero) {
    console.log(`la edad es de ${numero} años`)
```

Lo que me gustaría que recuerdes cuando veas la palabla _Hoisting_ en JavaScript es que tengas claro que la declaración y la inicialización de una variable o función ocurren en momentos distintos, incluso cuando los escribes en la misma línea.

## Empezemos con las Diferencias

- [las declaraciones de funciones pueden ser ejecutadas antes de su definición](#las-declaraciones-de-funciones-pueden-ser-ejecutadas-antes-de-su-definicion)
- [Declaraciones a la Derecha, Expresiones a la Izquierda](#declaraciones-a-la-derecha-expresiones-a-la-izquierda)
- [Las expresiones son más difíciles de inspeccionar](#las-expresiones-son-mas-dificiles-de-inspeccionar)

### las Declaraciones de funciones pueden ser ejecutadas antes de su definición

Gracias a que las declaraciones de funciones son ascendidas al momento de ejecución de nuestro programa, nuestra funcion es accesible incluso antes de que la hayamos definido:

```js
nuevaFuncion()

function nuevaFuncion() {
  console.log("Hola Mundo!")
}

// ➡️ Hola Mundo!
```

En cambio, esto no es posible con las expresiones de funciones, ya que no se sabe el valor que va a tener nuestra variable previamente declarada.

```js
nuevaFuncion()

var nuevaFuncion = function nuevaFuncion() {
  console.log("Hola Mundo!")
}

// ➡️ TypeError: nuevaFuncion is not a function
```

### Declaraciones a la Derecha, Expresiones a la Izquierda

La palabra reservada `function` se puede usar tanto al lado izquierdo como al lado derecho del signo `=`. Lo interesante es que siguen diferentes reglas dependiendo de donde la escribimos.

Cuando la usamos al lado izquierdo, estamos creando una declaración de función y es obligatorio asignarle un nombre. En cambio, si lo usamos a la dechecha del simbolo igual, hablamos de una expresiónde función y podremos omitir asignarle un nombre.

```js
// declaración de función
function soyUnaDeclaracion() {
  // ...
}

// expresión de función
var soyUnaExpresion = function () {
  // ...
}
```

En este último caso, la función pasa a ser una función anónima, algo conveniente ya que nuestro programa sigue funcionando sin problemas, pero puede tener algunas implicaciones a la hora de inspeccionar la cola de ejecución del programa.

Ahora es bastante habitual ver y usar funciones anónimas, ya que las La expresiónes de función flecha (`=>`) no permiten asignarles nombre. Utilizar este tipo de declaraciones no es malo, pero tenemos que tener presente que conyeva usarlas. Por un lado son más legibles y fáciles de usar, pero por otro son un poco más complejas de inspeccionar y seguir en la cola de ejecución. No te preocupes, veremos con más detalle cómo funcionan éste tipo de expresiones de función.

Un caso particular en el que una expresión de funcion no está a la derecha del símbolo igual, es la famosa IIFE (iniciales de _Immediately Invoked Function Expression_ o _Expresión de función ejecutada inmediatamente_). Una IIFE es una expresión de función porque la función está encapsulada en unos paréntesis (`()`) y crea un "scope" completamente aislado. Era una técnica bastante habitual hace unos años (vaya tiempos!)

```js
// la famosa IIFE
;(function vayaTiemposCuandoEraFamoso() {
  // ...
})()
```

### Las expresiones son más difíciles de inspeccionar

Inevitablemente tendremos problemas en nuestros programas. Poder identificar rápidamente los problemas y saber donde están para resolverlos es fundamental. Cuando le asignamos nombres a nuestras funciones, estas salen en la cola de ejecución y podemos seguir mucho mejor los errores y ver de donde provienen.

IMAGEN DEL CALLSTACK

Esto puede ser una opinión no muy popular, pero prefiero utilizar declaración de funciones por ser más explícitas y además por las ventajas a la hora de inspección del código. Ésto no quiere decir que no uso funciones anónimas o funciones flecha, sino que depende de cada caso es mejor priorizar legibilidad o velocidad de análisis e inspección.

## Conclusiones

JavaScript es un lenguaje dinámico y que nunca deja de sorprenderme, incluso después de estar usándolo prácticamente cada día por mas de 8 años puedo asegurarte que estoy constantemente aprendiendo algo nuevo! Asi como he aprendido (y recordado) muchas cosas al escribir este artículo. **Lo importante que debemos sacar de esto es la importancia de conocer las herramientas que tienes y las ventajas y/o desventajas de usarlas.** No hay una forma mejor o peor de usar funciones, lo bueno es conocer las herramientas que tenemos y sus implicaciones.