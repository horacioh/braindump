---
title: "Ambitos de bloque o Scopes"
alias: "scopes"
---

## Que es 'Scope'? 

- Es la forma en la que JS sabe que variables son accesibles para cada expresion del programa, y la gestion de las mismas.

## Compilación de JavaScript

- Aunque no lo parezca, JS es un lenguaje compilado, quizas no como otros lenguajes que si son compilados como generalmente se describen
- la compilacion tiene 3 pasos:

  1. Tokenizing/Lexing
  2. Parsing
  3. Code-Generation

  - La diferencia entre Tokenizing and Lexing, es que uno necesita de mantener un estado sobre los otros tokens para saber si el siguiente o los siguientes deben ser considerados tokens tambien. #tweetThis

- Lo que tenemos que tener en cuenta es que JavaScript no tiene la ventaja que otros lenguajes de programacion tienen de que el proceso de compilacion esta desconectado del proceso de ejecucion, esto ayuda a que puedan hacer muchas optimizaciones y el tiempo de compilacion no sea tan relevante. en JavaScript, la compilacion ocurre siempre antes de ser ejecutado y muchas veces ocurre en microsegundos, y justo despues se ejecuta nuestro programa.

- en este proceso de parsing, ademas de crear el AST, creamos todos estos bloques y ambitos y varaibles dentro de estos scopes. 

## Errores

- Siempre recibiremos un error siempre y cuando no encontremos la referencia a una variable no importa si es a la derecha (RHS) o a la izquierda (LHS)
- el Error sera diferente dependiendo del tipo de look-up que el "engine" este haciendo.
- si no se encuentra una RHS, el error es de tipo `ReferenceError`
- si no se encuentra una LHS, la respuesta cambia dependiendo si estas en `Strict Mode` o no
  - si estas en `Strict Mode`, recibiras un error de tipo `ReferenceError`
  - si NO estas en `Strict Mode`, el scope "global" creara una variable nueva y se la devolvera a "engine"
- Si una RHS es correcta, pero intentas hacer una operacion imposible (llamar a una variable que no es una funcion, o crear una referencia a una propiedad de un objeto de valor `null` o `undefined`), "engine" devolvera un error de tipo `TypeError`
- `ReferenceError` es un error de look-up, y `TypeError` es un error por querer hacer una accion imposible.
- "ReferenceError is Scope resolution-failure related, whereas TypeError implies that Scope resolution was successful, but that there was an illegal/impossible action attempted against the result." [fuente](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch1.md#errors)
- cuando hacemos un look-up, siempre empezamos desde el scope mas interno y vamos subiendo hasta encontrar la variable (o no). Hay que tener en cuenta que este look-up siempre se detendra al primer encuentro de variable, esto se le conoce como "shadowing"

  ```js
  var a = 3
  function hello(b) {
    var a = 2
    console.log(a, b)
  }

  hello(1) // 2, 1
  ```

  - cuando queremos acceder a la variable `a`, como dentro de `hello` existe una, el valor que optiene "engine" es `2` y no la declarada fuera de la funcion `hello`

## Maneras de "engañar" el ambito lexico

- hay dos formas de hacer esto, que ninguna es recomendada: usando `eval()` o usando `with` (deprecado)

### `eval()`

```js
var a = 3
function hello(str, b) {
  eval(str)
  console.log(a, b)
}

hello("var a = 2", 1) // 2, 1
```

### `with`

- TBD
## ámbitos de bloques (block scopes)

- un _scope_ es cualquier seccion de codigo en la que esta delimitada por dos corchetes `{}`, siempre y cuando haya alguna asignacion dentro.
- dependiendo de que tipo de asignacion veamos, tendremos diferentes resultados

  ```js
  var name = "Horacio"
  {
    var name = "Juan"
    console.log(name) // Juan
  }
  console.log(name) // Juan
  ```

  - si vemos asignaciones de tipo `var`, estas asignaciones solo respetan los ambitos de ejecucion de funciones, y no los bloques simples (ejemplo arriba). Esto pasa porque las asignaciones de tipo `var` son [elevadas](javascript-hoisting.md) al contexto de ejecucion de la funcion padre (en el ejemplo a `window`)
  - si cambiamos las asignaciones a `let` o `const`, veremos que si que se respeta el ambito en el que esta presente la declaracion, y por tanto obtenemos diferences resultados en el `console.log`. `let` y `const` si que son elevadas tambien, pero no

  ```js
  let name = "Horacio"
  {
    let name = "Juan"
    console.log(name) // Juan
  }
  console.log(name) // Horacio
  ```

  - la diferencia es que no podemos re-declarar variables declaradas con `let` y `const`, pero si que puedes modificar el valor siempre y cuando sea un objeto, gracias a que `let` y `const` trabajan sobre las [[javascript-referencias]] y no sobre el valor en si. En el caso de `const` si lo usamos con [[javascript-tipos-primitivos]] ya no se puede cambiar o re-asignar

## Ámbito Léxico

- _Lexical Scope_ es el siguiente (arriba) ambito de funcion en el cual la funcion esta definida. esto es importante saberlo cuando usamos [[funciones-flecha]] o _Arrow functions_.
- no importa donde ejecutes una funcion, su ambito lexico siempre sera el que tiene cuando es declarada.
- Piensa en que el ambito lexico esta definido por el autor del codigo. y se define en tiempo de compilacion!
- tiene que ver con el compilador (expecificamente la parte de "lexer")
- una forma de crear un nuevo scope es con los brackets:

  ```js
  {
    let foo = "foo"
    console.log("foo: ", foo)
  }
  ```

  - **un dato importante es que solo se convierte en scope cuando haya alguna declaracion que use `let` o `const` dentro**

### `let`

- se ha creado para un proposito muy concreto que es definir variables dentro de un ambito en concreto.
- a diferencia de su predecesor `var`, `let` solo se crea en el ambito en el que esta, y no en el ambito de la funcion como lo hace `var`.
- un caso claro en el que `var` funciona mejor, o esta mas alineado con su proposito que `let` es dentro de bloques `try/catch`.
  
  ```js
  function fetchCall(url) {
    let response
    try {
      response = fetch(url)
    } catch (e) { 
      response = e
    }

    return response
  }

  fetchCall('google.com')
  ```
  - este snippet, aunque funciona, la variable de tipo `let` no se esta usando como deberia. en este caso en el que necesitas una variable para todo el scope de la funcion, `var` es la herramienta correcta o el tipo de variable correcto a utilizar.

### `const`

- no es sobre valores "constantes", sino variables que no se pueden re-asignar
- la recomendacion es usarla solo con valores primitivos, de esta forma estaremos seguros que **nunca** va a cambiar.
- cuando usamos `const` dentro de una funcion o un bloque de 4 lineas de codigo, estamos diciendo que esta variable no va a ser reasignada en esas unicas 4 lineas de codigo, porque `const` solo existe dentro del ambito en el que se creo.

[//begin]: # "Autogenerated link references for markdown compatibility"
[javascript-referencias]: javascript-referencias "Referencias en JavaScript"
[javascript-tipos-primitivos]: javascript-tipos-primitivos "Tipos Primitivos"
[//end]: # "Autogenerated link references"
