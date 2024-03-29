---
title: La Palabra clave "this"
alias: this keyword
---

# la Keyword `this`

- cada vez que invocamos una funcion, se crea un puntero a una variable llamada `this`. El valor de `this` es el del objeto inmediatamente a la izquierda de la funcion que hemos invocado. veamos algunos ejemplos

  ```js
  const person = {
    name: "Horacio",
    saludo() {
      return `Hola ${this.name}!`;
    },
  };

  console.log(person.saludo()); // Hola Horacio!
  ```

  - En el ejemplo anterior, la funcion `saludo` tiene una referencia al objeto `this`. Como fue llamada desde el objeto `person`, podemos asegurar que `this` se refiere al objeto `person` como podemos ver en el resultado del `console.log()`.

- No puedes determinar el valor al que `this` va a apuntar sólo al ver la definición de la función, necesitas ver cómo ha sido llamada para poder determinar su valor.
- Hay 3 preguntas que nos podemos hacer para identificar que es `this` cada vez que veamos la invocación de una función:

  1. **¿La función fue invocada?**
  2. **¿Cómo fue invocada?**
  3. **¿En qué contexto fue invocada la función?**

- viendo el ejemplo anterior, podemos responder las preguntas así:

  1. ¿La función fue invocada? **Sí**
  2. ¿Cómo fue invocada? **con `()` un enlazada implícitamente (implicit binding)**
  3. ¿En qué contexto fue invocada la función? **el objeto `person`**

- el objeto a la izquierda de cualquier función declarada en el contexto global es `window`, aunque en algunos casos no lo veamos.

- Si cambiamos nuestro ejemplo de funcion a una funcion de flecha ( [[javascript-funciones-flecha]] ) veremos un comportamiento distinto, gracias al Ambito Lexico ( [[javascript-scopes]] )

- el valor de `this` en un contexto global varia dependiendo de donde estemos:
  - navegador: `window`
  - en node: `global`
  - en un REPL (cuando ejecutamos un archivo tipo `node index.js`): `module.exports`
- cuando ejecutamos nuestro codigo en modo estricto, el valor de this a nivel global es `undefined`. esto es para evitar que contaminemos el scope ( [[javascript-scopes]] ) global con valores de nuestro programa.
- `this` en constructores
  - cuanto creamos una funcion y la llamamos con la keyword `new`, el valor de this se le asigna a un nuevo objeto creado que tendra asociado el prototipo ( [[javascript-herencia-de-prototipos]] ) de la funcion creada.
  - estas funciones llamadas "constructores" devolveran implicitamente este nuevo objeto, pero nda nos impode devolver cualquier otra cosa, en ese caso perderiamos cualquier referencia al objeto creado inicialmente.
  - si devuelves `null` de un constructor, este se ignora y devuelve en su lugar el objeto asociado a `this` (el nuevo objeto creado)


