# Espresiones y Statements en Rust

- expresiones son cualquier cosa que se evalua a un valor
- statements no e evaluan a un valor
- esto es bueno saberlo porque en las [[rust-funciones]] puedes devolver la ultima expresión escrita en la función
- tambien puedes evaluar `ifs`:

```rust
let mensaje = if gatos > 1 {
    "Hay muchos gatos!"
} else {
    "Necesitamos gatos!"
};
```

- [[rust-let]] son statements también
