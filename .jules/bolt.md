## YYYY-MM-DD - Caching Intl Formatters
**Learning:** Repeated instantiation of Intl formatters (`Intl.NumberFormat`, `Intl.DateTimeFormat`) is a recognized performance bottleneck.
**Action:** Cache these instances globally to avoid re-instantiation overhead on every function call. Also, prefer direct string comparison for sorting strict ISO format strings `YYYY-MM-DD`.
