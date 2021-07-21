# Braid meeting 10 - personal notes

- [video](https://braid.org/meeting-10)

- CRDT fundamental problem that tries to solve
  - a resulting algorythm that I can
    - insert anywhere
    - converge
    - not interleaving: do not mix concurrent changes in a weird way
      - aaa + bbb = aaabbb = bbbaaa != abababab
- CRDT concurrent insert problem
  - two inserts at the same location pointing to the same parent
  - Yjs orders them by id size (the lowest first)
- you can set a table of rules for how to merge concurrent changes