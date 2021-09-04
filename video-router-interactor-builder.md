# [Uber Mobility] RIB (Router Interactor Builder) - Yi Wang

- [video](https://www.youtube.com/watch?v=Q5cTT0M0YXg)
- sent by [[Jonas]]

---

- the interactor is the core
  - business logic
- router: is the helper to do tasks
- builder: composer. it takes diff parts and compose them and create new RIBs
- view controller: layout and animation
- Optional Presenter
  - rarely used
  - all the logic to translate complex business logic into a view or the other way around (view to business logic)
- each component has its own logic and SCOPE

## References

- [Architecting Uber's New Driver App in RIBs \| Uber Engineering Blog](https://eng.uber.com/driver-app-ribs-architecture/)