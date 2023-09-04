# Hoisting

- `let` y `const` si sufren de hoisting, pero funcionan diferente a el hoisting de `var`, porque su espacio en memoria **no se inicializa con el valor `undefined` como con `var`**, que es lo mismo que decir "no puedes usar esta variable aun.
- el "temporal dead zone" existe gracias a `const`, porque si cuando creamos el espacio en memoria de una variable declarada con `const` a `undefined`, seria academicamente incorrecto poder asignarlo otro valor cuando mientras ejecutamos el programa lo requiera. y ya que lo agregaron para `const`, tambien lo hicieron para `let`x