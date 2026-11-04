## 2024-05-23 - [Cached Intl Formatters]
**Learning:** Repeated instantiation of Intl formatters (`Intl.NumberFormat`, `Intl.DateTimeFormat`) is a recognized performance bottleneck. Implicit instantiations via `.toLocaleString()` and `.toLocaleDateString()` carry this overhead on every function call.
**Action:** Always instantiate explicit formatters and cache them globally to avoid re-instantiation overhead on every call.
