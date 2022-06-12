# Sistema de tipos en JavaScript

- la comprobación de tipos de las variables en JavaScript ocurre cuando se está ejecutando, a diferencia de otros lenguajes como Go que los tipos se comprueban antes de ejecutar el programa.
- JavaScript tambien es un **lenguaje dinámico**, que una variable puede cambiar de tipo durante la ejecución del programa.
- Que tengas la flexibilidad de modificar el tipo de una variable dinámicamente, no quiere decir que no existan reglas de tipos en JavaScript. Estas reglas se compreban cada vez que se ejecuta cualquier línea de codigo y si se encuentra un error, detendrá la ejecución del programa y nos devolverá el error encontrado (`TypeError...`)
- el sistema de tipos de JavaScript a comparación de otros lenguajes de programación. esto se debe a la [[javascript-coercion|coerción]].
- tipos de conversion de tipos:
  - implicita: cuando hacemos una operación sobre el valor:
    - `+'3.14' => 3.14`
    - `true + '' => 'true'`
  - explícita: cuando utilizamos alguno de los metodos nativos de valores primitivos:
    - `Number('3.14') => 3.14`
    - `Boolean(44) => true`
    - `(2059).toString() => '2059'`
- los lenguajes estáticos utilizan dos maneras para comprobar los tipos entre dos entidades:
  - **tipado nominal**: cuando dos tipos tienen el mismo nombre o uno es el subtipo del otro (por herencia)
  - **tipado estructural**: solo basta para que cunplan la misma estructura. esto es lo que hace [[typescript]]
- en los lenguajes dinámicos cono JavaScript, se usa lo que se llama **Duck Typing**: No importa que sean del mismo tipo o no, si los métodos o operaciones se pueden cumplir, no da problemas. Se llama así porque se refiere a este dicho por James Whitcomb Riley:
  > When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck.

## Referencias

- [4. EL SISTEMA de TIPOS DE JAVASCRIPT | JS en ESPAÑOL](https://www.youtube.com/watch?v=0ei4nb49GKo)


