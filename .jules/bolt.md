## YYYY-MM-DD - [Optimize Intl instantiation]
**Learning:** Repeated instantiation of `Intl.NumberFormat` and `Intl.DateTimeFormat` (or `.toLocaleString()`) is a performance bottleneck.
**Action:** Cache explicit instances globally to avoid re-instantiation overhead on every function call.
