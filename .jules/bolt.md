## 2024-05-24 - Cached Intl formatters
**Learning:** Repeated instantiation of Intl formatters (Intl.NumberFormat, Intl.DateTimeFormat) is a recognized performance bottleneck.
**Action:** Instances should be cached globally to avoid re-instantiation overhead on every function call.
