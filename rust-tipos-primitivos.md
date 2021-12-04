# Tipos Primitivos en Rust

## Cadenas de texto (Strings)

- Así es el "Hello World" hecho en [[rust]]:

```rust
fn main() {
    println!("Hola, Mundo!");
}
```

- La interpolación de texto funciona un poco distinto en [[rust]].
- con [`println!`](https://doc.rust-lang.org/stable/std/macro.println.html) puedes hacer interpolación de variables

```rust
fn main() {
    let saludo = "Hola";
    let sujeto = "Mundo"
    println!("{}, {}!", saludo, sujeto);
}

// "Hola, Mundo!"
```

- tambien existe [`format!`](https://doc.rust-lang.org/stable/std/macro.format.html) y [`panic!`](https://doc.rust-lang.org/stable/std/panic/index.html)

## Números

- Hay diferentes tamaños numéricos en [[rust]]:
  - `i8`
  - `i16`
  - `i32`
  - `i32`
  - `i128`
  - `u8`
  - `u16`
  - `u32`
  - `u32`
  - `u128`
- la diferencia entre números "unsigned" (los que empiezan con `u`) y "signed" es si el número puede o no tener **representacion negativa**. Números "signed" pueden ser negativos, números "unsigned" no.
- se puede cambiar el tamaño de un numero con el keyword `as`:

```rust
fn multiply(x: i64, y: u8) -> i64 {
    return x * (y as i64);
}
```

## Flotantes (Floats)

- [[rust]] tiene diferentes tamaños de "floats":
  - `f32`
  - `f64`
- Aunque `f64` es más preciso, estamos hablando del doble de memoria por el mismo valor.
- se puede cambiar el tamaño de un numero con el keyword `as`:

```rust
fn multiply(x: i64, y: u8) -> f64 {
    return (x as f64) * (y as f64);
}
```

## Booleans

- `booleans` se pueden representar como `u8` (0 o 1)
- `==` se usa para comparar cosas.
  - compara a nivel de estructura, no referencias como en [[javascript]]
  - solo existe este tipo de comparación
