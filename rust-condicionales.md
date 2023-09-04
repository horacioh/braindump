# Condicionales en Rust

- la sintáxis es muy parecida a la de [[javascript]]:

```rust
if gatos > 1 {
    println!("Hay muchos gatos!")
} else {
    println!("Necesitamos gatos!")
}
```

- No hay que encerrar la expresión con `()`
- los `{}` tienen que existir. no se puede escribir la version abreviada como en [[javascript]].
- la expresión a evaluar **tiene dar como resultado `boolean`**.
- se puede hacer `else if`

```rust
if gatos > 1 {
    println!("Hay muchos gatos!")
} else if gatos < 100 {
    println!("Necesitamos gatos!")
}
```
