# Let y Const

- **Título:** Ya sabes usar `let` y `const` pero, ¿Sabes por qué se crearon?

- **Tema/Tecnología:** Javascript, Fundamentos

### ℹ️ Información General

- **¿Por qué es importante aprender este tema?**
  No es muy importante saber sobre los origenes de `let` y `const` para poder empezar a usarlas. Es importante para poder evitar y corregir errores que pueden ocurrir gracias a no saber la manera correcta de usarlas y su verdadera intención en el lenguage.

- **¿Cuáles son las consecuencias de no aprender este tema?**
  Las consecuencias de no saber simplemente es perder más tiempo debugando código que supuestamente debe de funcionar.

- **¿Qué tiene de especial este artículo que no pude encontrar en la documentación u otros artículos?**
  Tenemos que romper el mito que dice: "`let` y `const` substituyen a `var`"

  En este articulo vamos a centrarnos en las razones principales por las que se decidió crear estos tipos de variables, las necesidades del lenguaje en ese momento, y definir el verdadero uso que tienen.

- **¿En que se equivocan otros recursos al enseñar este tema?**

  - La mayoria de los articulos/vídeos que encontraras en internet sólo se centran en el Cómo usarlas solamente, y ejemplos relativamente sencillos.
  - Como los ejemplos que se usan son bastante simples y muy alejados de la realidad en la que se van a usar, Cuesta más transferir todo lo que has aprendido de ellas a las apps del mundo real.

- **¿Cuáles son uno o dos problemas o preguntas más importantes para explorar en el tema?**

  - definir lo que es ambito lexico
  - el poder de encapsulacion de las variables let y const son importantes para evitar contaminar ambitos padres innecesariamente.

- **¿Cuál es la aplicación de demostración o el ejemplo que se utilizará para el artículo?**
  - for loop
  - event listener
  - currying

### 🤓 Audiencia

- **¿Para quién es este artículo? ¿Quién es la audiencia?**
  Programadores Javascript tanto si están empezando como si llevan ya unos años programando

- **¿Cómo se relaciona este tema con el panorama general del desarrollo web?**
  let y const son tipos de valores fundamentales para cualquier programador web.

- **Acerca del tema del artículo ¿qué es muy importante, pero aun así difícil de entender?**

- **¿Qué problemas (si existen) está resolviendo tu alumno ideal?**
  necesitamos saber qué tipo de herramientas tenemos cuando estamos creando nuestros programas. De esta manera evitamos usar herramientas erróneas en situaciones erróneas.

### 🎯 Meta

- **¿Cuál es la meta final del artículo?**
  Saber usar let y const para lo que realmente fueron diseña`

- **¿Cuál es el “superpoder” que adquirirá el lector después de aprender este tema?**

### 🔥 Outline

- como mencionaba en el articulo anterior, conocer sobre los ambitos es crucial para entender mejor sobre `let` y `const`
- la razon por la que tenemos diferentes maneras de nombrar nuestras variables es para poder encapsularlas de la manera correcta y que no sobrepasen el ambto en el que deben estar. antes de `let` y `const` teniamos mecanismos gracias a funciones, pero hay casos en los que es limitado, comparado con tener tipos de variables que funcionan a nivel de ambitos de bloque.

---

- descripcion
- como funcionan
- las necesitamos para crear ambitos lexicos
- en vez de fijar el uso de let a (la quiero reasignar) y const a (no quiero reasignarla), fijarla en torno al scope en el que esta.
- si mi scope son 4 lineas, no tiene ningun sentido que usemos const porque SOLO en esas 4 lineas ese valor puede ser reasignado. es mejor usar var o let (menos caracteres!)
- que es el TDZ (temporal dead zone)
  - a diferencia de var, no son inicializadas con undefined, por culpa de Const
  - como no tienen ningun valor, por eso son marcadas como que "no se pueden usar hasta que son declaradas"
- no son un substituto de "var"
- cuando se deberian usar vs como se usan
