# javascript-igualdad

- [[post-igualdad]]

- la diferencia entre `==` y `===` es que `==` **permite [[javascript-coercion|coerción]] de tipos** y `===` no lo permite.
- cuando se dice que _uno compara tipos y el otro no_ es erróneo.
- Un dato importante es que si los tipos de ambos valores en la operacion son iguales, se puede decir que los algoritmos de comparación hacen exactamente lo mismo y te darán el mismo resultado:

  ```js
  var a = 42;
  var b = 40;
  var c = 42;

  a == b; // false
  a === b; // false

  a == c; // true
  a === c; // true
  ```

- para poder entender muy bien la igualdad entre valores, es importante saber que es lo que pasa internamente: JS utiliza unas funciones que les llama "operaciones abstractas" (o operaciones internas o privadas) para poder convertir cualquier valor a otro valor primitivo. `toString`, `toNumber`, `toBoolean` y `toPrimitive`.

## Igualdad en Objetos

- cuando comparamos objetos, estamos **comparando referencias**. Dos objetos iguales guardados en diferentes variables no se toman como iguales. Otra forma de decirlo es que se compara la **identidad del objeto**, y no la estructura o los valores
- para poder hacer comprobaciones de los valores de los objetos, tenemos que verificar cada uno de los atributos y sus valores. Esta operacion puede ser algo compleja, te propongo tres opciones:

  1. implementar una función recursiva para ir comprobando cada atributo
  2. convertir ambos objetos a una cadena de caractéres y comprarar el resultado (con `JSON.stringify()`)
  3. usar una función externa como `isEqual` de [`lodash`](https://lodash.com/docs/4.17.15#isEqual).


