## 2024-05-24 - Avoid repeated Intl formatter instantiation
**Learning:** Repeated instantiation of Intl formatters (`Intl.NumberFormat`, `Intl.DateTimeFormat`) in loops or frequently called functions is a severe performance bottleneck.
**Action:** Always cache these instances globally and reuse them instead of creating new instances.
