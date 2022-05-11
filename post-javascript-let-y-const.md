# Let y Const

- como mencionaba en el articulo anterior, conocer sobre los ambitos es crucial para entender mejor sobre `let` y `const`
- la razon por la que tenemos diferentes maneras de nombrar nuestras variables es para poder encapsularlas de la manera correcta y que no sobrepasen el ambto en el que deben estar. antes de `let` y `const` teniamos mecanismos gracias a funciones, pero hay casos en los que es limitado, comparado con tener tipos de variables que funcionan a nivel de ambitos de bloque.

---

- descripcion
- como funcionan
- las necesitamos para crear ambitos lexicos
- que es el TDZ (temporal dead zone)
  - a diferencia de var, no son inicializadas con undefined, por culpa de Const
  - como no tienen ningun valor, por eso son marcadas como que "no se pueden usar hasta que son declaradas"
- no son un substituto de "var"
- cuando se deberian usar vs como se usan
