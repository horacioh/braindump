---
title: Operaciones Abstractas en JavaScript
---

- son el pilar fundamental de como [[javascript-coercion]] funciona.
- no son funciones que podemos usar nosotros, sino una idea abstracta de lo que esto representa
- todos los objetos tienen dos metodos: `valueOf` y `toString`
- [[javascript]] utiliza estos metodos para poder ejecutar las conversiones de tipos. Depende del tipo al que vaya a convertir es en el orden que va a intentar ejecutar estas funciones.
- los metodos son:
  - ToPrimitive()
  - ToString()
  - ToBoolean()
  - ToNumber()

## ToPrimitive()

- [especificación](https://262.ecma-international.org/12.0/#sec-toprimitive)
-

## ToString

- [especificación](https://262.ecma-international.org/12.0/#sec-tostring)

## ToBoolean

- [especificación](https://262.ecma-international.org/12.0/#sec-toboolean)
- este en particular no convierte los valores usando `ToPrimitive`, solo hace un lookup!

  ```js
  [] => true
  {} => true
  ```

- es facil recordar mejor la lista de los valores que devuelven `false`:
  - `""`
  - `0`, `-0`
  - `null`
  - `undefined`
  - `false`


