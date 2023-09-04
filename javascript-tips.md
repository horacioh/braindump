# JavaScript Tips

1. No todo el JavaScript es un objeto. los Tipos Primitivos ( [[javascript-tipos-primitivos]] ) no lo son.
2. Cuando pasas un valor primitivo, pasas el **valor**. En cambio cuando pasas un objeto, pasas la **referencia** al objeto.

   ```js
   let a = 2;
   let b = a;
   a = 10;

   // resultado:
   // a = 10
   // b = 2

   let c = { d: 10 };
   let e = c;
   c.d = 2;
   // Resultado
   // c = {d: 2}
   // e = {d: 2}
   ```

3. los objetos tienen una propiedad llamada `__proto__` o **proto** ( [[javascript-dunder-proto]] ) que se crea automaticamente
4. cuando utilizas un metodo de un objeto, por ejemplo `[].map()` el metodo que realmente estas usando es el metodo definido en el prototipo de la funcion global `Array` (`Array.prototype.map === [].map`). lo que estamos haciendo aqui es usando La Herencia de Prototipos ( [[javascript-herencia-de-prototipos]] )


