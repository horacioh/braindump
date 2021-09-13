---
title: Ambitos en JavaScript
---

- js es un lenguaje compilado
  - probarlo con el error Syntax Error
- procesos de un lenguaje compilado
  - lexing/tokenization
  - parsing
  - code generation
- tipos de ambitos o scopes
  - funciones
  - bloques
- proceso de como se crean los ambitos (buckets and marbles)
  - usar este codigo:
    
    ```js
    var profesor = 'Matias'

    function nuevClase() {
        var profesor =  'Lauro'
        console.log('escuelaFrontend!')
    }

    function preguntar() {
        var pregunta = 'Seguro?'
        console.log(pregunta)
    }

    nuevaClase()
    preguntar()
    ```

  - actores: compiler y scope manager
  - explicar shadowing (dos variables en nested scopes con el mismo nombre)
  - explicar porque pasamos los console.logs (no creamos ni accedemos a ninguna variable o ambito extra)
- los ambitos son definidos cuando se escribe nuestro codigo, osea el autor del codigo lo define.
- una vez todo el plan de ambitos esta creado por el compilador, pasamos a la fase de ejecucion de nuestro programa, que la hace el JS Engine.
  - las declaraciones de funciones en esta fase podemos decir que "no existen", porque ya fueron parseadas y definidas en el proceso anterior (parsing), solo se toman en cuenta las lineas de codigo ejecutables.
- hay dos tipos de referencias: "target" y "source".
  - target es cuando recibira un valor: `var teacher = 'hello'`
  - source es cuando queremos obtener su valor: `otherClass()` (ira a buscar el valor de `otherClass` para ejecutarlo)
- referencias de tipo source que no son encontradas, siempre devulven el error "ReferenceError"