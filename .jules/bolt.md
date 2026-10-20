## 2024-02-09 - Intl Formatter Bottleneck
**Learning:** Repeated instantiation of Intl formatters (`Intl.NumberFormat`, `Intl.DateTimeFormat`) is a recognized performance bottleneck.
**Action:** Instances should be cached globally to avoid re-instantiation overhead on every function call (e.g., in `formatCurrency`, `formatMonth`, or inline table rendering).
