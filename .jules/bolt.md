## 2024-05-24 - Cached Intl.NumberFormat Optimization
**Learning:** Instantiating `new Intl.NumberFormat` or calling `Number.prototype.toLocaleString()` inside rendering loops creates significant overhead. Caching the formatter instance yields ~8x to ~100x performance improvements in tight loops.
**Action:** Always prefer caching `Intl` formatter instances instead of creating them on the fly, especially in front-end functions used frequently during DOM renders or data processing.
