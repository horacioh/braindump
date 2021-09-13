---
title: Tipos Primitivos
alias: primitivos
---


# tipos primitivos

- tipado dinamico
- coercion de tipos por el tipado debil
- que son
- cuales son
- diferencia entre null y undefined
- javascript bug!
- que es un tipo de dato primitivo?
  - no posee metodos ni propiedades
  - son inmutables
- `typeof` para objeter el tipo de una variable. siempre devuelve un string, y un grupo muy especifico de strings
- undefined vs undeclared
  - undeclared: esta variable no ha sido declarada
  - undefined: esta variable ha sido declarada pero no se le ha asignado ningun valor
  - uninitialized (Temporal Dead Zone): no son inicializadas, no se pueden usar antes de ser inicializadas
- tipos primitivos
  - `string`
    - hablar del backtick
    - `toString()`
      - no se puede llamar con valores `null` o `undefined` porque tirara un error
  - `number`
    - cualquier numero es number
    - los decimales no funcionan muy bien
      - IEEE 754: numeros que ocupan 8Bytes
      - usar `toFixed` para truncar los decimales de los resultados de las operaciones
      - tenemos limites al usar numeros -(2 ** 53) - (2 ** 53)
      - puedes usar el valor `Number.MIN_SAFE_INTEGER` y `Number.MAX_SAFE_INTEGER`
      - tambien `Number.isSafeInteger()` para comprobar que el numero esta dentro de los limites
      - `Number.MAX_VALUE` y `Number.MIN_VALUE` son los numeros mas grande y pequeños con los que puedes trabajar, pero son aproximaciones
      - tambien existe `Infinity` y `-Infinity`, que son mayores al numero mas grande y menos grande.
      - tienes `isFinite` para comprobar que el numero es Finito
      - tambien tenemos `NaN`, que es un numero y el resultado de operaciones invalidas
        - `NaN` = "Invalid Number"
        - `NaN` es el unico numero que no tiene "identidad", lo que hace que nunca sera igual a ella misma (`NaN !== NaN`)
  - `boolean`
    - solo puede tener el valor `true` o `false`
    - normalmente en evaluaciones JS convierte cualquier valor a un boolean
    - `false`, `''`, `0`, `undefined`, `null` y `NaN` son los valores que resultan en `false`. todos los demas, seran `true`.
    - `!` cambia al valor opuesto
    - `!!` cambia el tipo de valor a boolean
  - `null`
    - nos ayuda representar la ausencia de valor
    - BUG: `typeof null === 'object'`
  - `undefined`
    - tipo de dato desconocido
    - es recomendable no asignar a undefined, y dejar que el motor de JS lo haga automaticamente
  - `symbol (ES2015)`
    - se usa para crear valores unicos
    - no se usa con la palabra `new`
    - hay un registro global de simbolos que se puede usar
      - se comparte entre iframes, serviceworkers y 
- todo lo que no sea primitivo, es un objeto
- nuevo dato primitivo: `bigint`
  - se usa agregandole una `n` al final
  - se pueden hacer operacions matematicas entre ellos, no entre diferentes tipos de datos.

- Autoboxing: JavaScript hace esto para poder llamar a los metodos de prototipo disponibles para los tipos primitivos de JS.
- se le conoce tambien como "Object Wrapper" a la accion de encapsular valores primitivos para poder acceder a los metodos de funcion del tipo.
  - una vez lo utiliza, el motor de JS lo borra instantaneamente.