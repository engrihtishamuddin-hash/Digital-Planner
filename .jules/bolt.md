## 2026-09-06 - [Intl.NumberFormat caching]
**Learning:** Instantiating `Intl.NumberFormat` or calling `toLocaleString()` within tight loops or global formatter functions carries a massive performance penalty in vanilla JS (~50x-60x overhead).
**Action:** Always extract and globally cache `Intl.NumberFormat` instances when formatting numbers or currencies in vanilla JavaScript applications, rather than recreating them per-call.
