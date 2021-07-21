---
title: Dunder proto
alias: proto
---

# Dunder proto

- Cada objeto en JavaScript tiene asociado un objeto llamado "Dunder Proto". este objeto guarda todos los metodos que este objeto puede llamar.
  
  ```js
  const a = {}
  const b = Object.create(a)

  /**
  a.__proto__ = original Object proto
  b.__proto__ = a.__proto__ = original Object proto
  **/
  ```
  
- cada tipo de objeto tiene su Dunder proto especial.