# Clausuras (Closure)

- es muy importante saber que es el [[post-ambito-lexico]]
- la habilidad de las funciones de recordar los valores declarados en su ambito lexico sin importar donde son ejecutadas
- ejemplos de Clausuras
- beneficios de clausuras
- dato curioso sobre cuanto tiempo duraron en ser adoptadas (dos generaciones)
- como se identifica una clausura
- ejercicio
  - retrasar operaciones o adelantar operaciones usando clausuras.
  - algo con react y hooks?
    - counter con custom hook
- para entender bien closures, necesitamos entender que es ambito lexico ([[javascript-scopes]])
- Solo las funciones tienen closure
- hay dos etapas:
  - aprender a identificar closures
  - aprender a aplicarlas de maneras utiles en nuestros programas
- closure is variable-oriented, not value-oriented

  - es comun pensar que closures ayudar a "guardar el valor de una variable en un momento en concreto", cuando no es asi. esta variable puede cambiar, pero si que mantenemos un link con esa variable sea donde se llame a la funcion. Para demostrar esto, podemos usar un loop:

  ```js
  var keeps = [];

  for (var i = 0; i < 3; i++) {
    keeps[i] = function keepI() {
      // closure over `i`
      return i;
    };
  }

  keeps[0](); // 3 -- WHY!?
  keeps[1](); // 3
  keeps[2](); // 3
  ```

- no todo lo que parece closure lo es. ejemplo:

```js
function say(myName) {
  var greeting = "Hello";
  output();

  function output() {
    console.log(`${greeting}, ${myName}!`);
  }
}

say("Kyle");
// Hello, Kyle!
```

- `output` no forma una closure porque es llamada en el mismo scope que las variables a las que accede. esto es Ambito léxico, no closure.

## [Observable Definition](https://github.com/getify/You-Dont-Know-JS/blob/8861041133f496edce0d03885e2e998d50c3414a/scope-closures/ch7.md#observable-definition)

We're now ready to define closure:

Closure is observed when a function uses variable(s) from outer scope(s) even while running in a scope where those variable(s) wouldn't be accessible.

The key parts of this definition are:

Must be a function involved

Must reference at least one variable from an outer scope

Must be invoked in a different branch of the scope chain from the variable(s)

This observation-oriented definition means we shouldn't dismiss closure as some indirect, academic trivia. Instead, we should look and plan for the direct, concrete effects closure has on our program behavior.

## Ejemplos comunes de closure

- handlers (express, nextjs)
- React Hooks
- event listeners


