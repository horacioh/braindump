---
title: Como funciona JSON.stringify()
status: draft
language: spanish
---

- este metodo nos ayuda a transformar cualquier objeto a `string`
- siempre que el valor sea serializable y consumible por cualquier otro sistema compatible con JSON se devolverá en su estado natural.
- esta funcion ignora los valores de tipo `undefined`, `Symbol` y `funciones` (funciones no son un tipo realmente, pero se les trata distinto por ser "objetos ejecutables" (callable objects))

  ```js
  JSON.stringify(42) // "42"
  JSON.stringify("42") // ""42"" (a string with a quoted string value in it)
  JSON.stringify(null) // "null"
  JSON.stringify(true) // "true"

  JSON.stringify(undefined) // undefined
  JSON.stringify(function () {}) // undefined

  JSON.stringify({ a: 2, b: function () {} }) // "{"a":2}"
  ```

  si estos tipos de valores estan en un array, se devuelve `null` para no perder el orden de los otros valores dentro del array.

  ```js
  JSON.stringify([1, undefined, function () {}, 4]) // "[1,null,null,4]"
  ```

- esta funcion acepta otros dos valores opcionales:

  - el primero se le llama **replacer**, que puede ser un array o una función
  - el segundo se le llama **spacer**, que puede ser un numero o un string

```js
var a = {
	b: 42,
	c: "42",
	d: [1,2,3]
};

JSON.stringify( a, null, 3 );
// "{
//    "b": 42,
//    "c": "42",
//    "d": [
//       1,
//       2,
//       3
//    ]
// }"

JSON.stringify( a, null, "-----" );
// "{
// -----"b": 42,
// -----"c": "42",
// -----"d": [
// ----------1,
// ----------2,
// ----------3
// -----]
// }"

```

- a veces se confunde `toJSON()` con `JSON.stringify()`. la manera de verlo es así:

  - `toJSON` convierte el valor en un valor seguro para que se pueda convertir a una cadena de texto
  - `JSON.stringify` ejecuta esta conversion a cadena de texto.

    ```js
    var a = {
      val: [1, 2, 3],

      // probably correct!
      toJSON: function () {
        return this.val.slice(1)
      },
    }

    var b = {
      val: [1, 2, 3],

      // probably incorrect!
      toJSON: function () {
        return "[" + this.val.slice(1).join() + "]"
      },
    }

    JSON.stringify(a) // "[2,3]"

    JSON.stringify(b) // ""[2,3]""
    ```
- cuando pasamos un objeto a `JSON.stringify`, se verifica si ese objeto tiene la función `toJSON`, si la tiene, se ejecuta automáticamente para convertir los valores a un formato seguro para la conversion de cadena de texto.

## Referencias:

- [You\-Dont\-Know\-JS/ch4\.md at 1st\-ed · getify/You\-Dont\-Know\-JS: JSON stringification](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch4.md#json-stringification)
