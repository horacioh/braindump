---
title: Funciones
---

- cada vez que llamamos a una funcion, realmente estamos usando una version que es "sintactic sugar"

  ```js
  const list = [1, 2, 3, 4, 5, 6];

  list.slice(1, 4);
  list.slice.call(list, 1, 4);
  list.slice.apply(list, [1, 4]);
  ```

- el primer valos que se le pasa tanto a `call` como a `apply` se le llama `thisArg`
- analogia para acordarse de la diferencia entre ambos:
  - `call` empieza con `c` => atributos separados por coma
  - `apply` empieza con `a` => atributos dentro de un arreglo
- tambien existe el metodo `bind`, otra forma de asignar el valor de `this` a las llamadas de tus funciones.
  - una vez hayas asignado el valor de `this` usando `bind`, no hay manera de separarlos, incluso ni con `call` o `apply`.
- [[javascript-funciones-flecha]]


