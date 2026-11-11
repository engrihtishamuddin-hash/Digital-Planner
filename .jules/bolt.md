## YYYY-MM-DD - [Cache Intl Formatters for Performance]
**Learning:** Repeated instantiation of Intl formatters (`Intl.NumberFormat`, `Intl.DateTimeFormat`) and implicit calls via `toLocaleString()`/`toLocaleDateString()` are performance bottlenecks.
**Action:** Always cache and reuse `Intl` formatter instances globally instead of creating them inline on every function call or table row rendering.
