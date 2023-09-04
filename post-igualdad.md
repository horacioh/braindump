# articulo igualdad: Escuela Frontend

## Por que tengo que aprender sobre igualdad?

## Que es la igualdad

- hacer los tipos Obvios es mejor que usar `===`
- explicar el ejemplo de `null == undefined`
  - el hecho de que se permita la coercion con estos valores es el beneficio que tenemos para poder escribir codigo mas legible
- hablar de los algoritmos
- expliquemos uno de los casos de WAT, para ilustrar que el problema no es que JS permita coercion de tipos, sino la comparación que estemos haciendo tenga sentido
- usar `===` lo que hace es ocultar el problema real y no
- "Triple equals (`===`) prevents you from seeing the REAL problem, which is that you are making a terrible comparison in the first place. You should fix it so the comparisons that you are making MAKE SENSE"

### Resumen de `==`

- si los tipos son iguales: `===`
- si es `null` o `undefined`: igual
- Si no es un valor primitivo: [[javascript-operaciones-abstractas|`ToPrimitive`]]
- Prefiere comparacion de numeros

### Corner cases

- `[] == ![]` vs `[] != []`
- `[] == true`. never compare to `true` or `false`

### Cuando evitar `==`

- con `0` o `""` o `" "`
- no usarlos con objetos (no primitivos)
- no usar con `== true` o `== false`

## Como le podemos sacar ventaja a la igualdad

- saber los tipos con los que trabajas es mejor que no saber los tipos
- tipado estatico no es la unica forma de saber los tipos de una variable
- usar `==` no se trata de hacer comparaciones sin conocer los tipos, en realidad es el caso contrario. se trata de comparacion entre valores del mismo tipo y opcionalmente donde coercion es valioso
- `===` es innecesario cuando los tipos de los valores que estamos comparando son iguales
- **cuando sabes los tipos**, `==` siempre será la solución más correcta. si no sabes los tipos, quizas haya que restructurar el codigo, **puede** ser indicativo que no entiendes muy bien lo que tu programa debe hacer

## Desafio

### Credito extra

## Conclusion

## Notas y Referencias

## Respuesta al desafio


