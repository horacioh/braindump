# rust-testing

```rust
fn sum(a: i32, b: i32) -> i32 {
  a + b
}

#[cfg(test)]
mod test {
  use super::*;
  #[test]
  fn test_sum() {
    assert_eq!(sum(1, 2), 3)
  }
}
```
