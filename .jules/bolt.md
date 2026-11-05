## 2024-05-24 - Cache Intl Formatters
**Learning:** Repeated instantiation of Intl formatters (`Intl.NumberFormat`, `Intl.DateTimeFormat`) inside loops and repeated functions causes noticeable performance overhead in this vanilla JS app.
**Action:** Cache these formatters globally to avoid re-instantiation overhead on every function call.
