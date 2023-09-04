---
title: Herencia de Prototipos
---

# Herencia de prototipos

- en JavaScript tenemos objetos Globales como `Array`, `Map`, `Set` y el mismo `Object`
  - estos objetos en realidad son funciones, que tienen definidos metodos y valores en su propiedad `prototype` (`Object.prototype`).
  - cada vez que creamos una instancia de algona de estas funciones, las propiedades dentro del `prototype` de la funcion padre seran accesibles por la instancia. siempre que cambiemos el `prototype` de un objeto padre o una funcion global, afectaremos a todas las instancias creadas a partir de ese objeto padre.
- JavaScript lo que usa para la herencia de prototipos es el [[javascript-dunder-proto]] de un objeto y no el objeto `prototype` creado en las funciones.
- al crear una instancia de una funcion usando el keyword `new`, el [[javascript-dunder-proto]] de este nuevo objeto apunta a el `prototype` de la funcion padre. De esta forma los metodos creados en este prototipo son accesibles por el nuevo objeto creado

  ```js
  function Person(name) {
    this.name = name;
  }

  Person.prototype.walk = function walk() {
    console.log(`${this.name} walk!`);
  };
  const bob = new Person("bob");

  bob.__proto__ === Person.prototype; // true
  bob.walk === Person.prototype.walk; // true
  ```

- en cambio cuando creamos un objeto a partir de otro usando el metodo `Object.create`, lo que agregamos a la referencia del objeto `__proto__` del nuevo objeto creado es una cadena que llega al `__proto__` del objeto original:

  ```js
  const a = { hello: "jellow world" };
  const b = Object.create(a);
  b.__proto__.__proto__ === a.__proto__; // true
  ```

- cuando creamos una funcion, se crea automaticamente un objeto en la propiedad `prototype` de la funcion. Esta propiedad no aparecera cuando queramos acceder a cualquier otra propiedad de la funcion (usemos la notacion de punto o los parentesis planos (`[]`))

## Otras fuentes

- [\`\_\_proto\_\_\` in ECMAScript 6](https://2ality.com/2015/09/proto-es6.html)


