# `let` en Rust

- `let` es la forma en la que declaramos variables en [[rust]].
- todas las variables son **inmutables** por defecto.

```rust
let hello = "Hello";
let x = 1.2;
```

- si queremos una variable **mutable**, podemos agregar la parabla reservada `mut` delante del nombre de nuestra variable:

```rust
let mut x = 1.2;
x += 42; // válido!
```

- Aunque marquemos una variable como `mut`, esto no permite que re-asignemos esa variable a otro valor _de otro tipo_. Tiene que ser otro valor del mismo tipo para que sea permitido.
