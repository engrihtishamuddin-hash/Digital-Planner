## 2026-10-07 - Intl Formatter Overhead
**Learning:** Repeated instantiation of Intl formatters (`Intl.NumberFormat`, `Intl.DateTimeFormat`) inside frequently called functions (like rendering table rows) is a significant performance bottleneck. In local benchmarks, caching `Intl.NumberFormat` instead of calling `new Intl.NumberFormat()` or `Number.toLocaleString()` inside loops resulted in an approximate ~100x speedup for formatting calls.
**Action:** Always cache `Intl` formatter instances globally or outside of loops/frequently called functions instead of instantiating them on every call.
