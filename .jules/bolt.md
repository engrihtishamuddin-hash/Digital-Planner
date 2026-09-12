## 2024-05-18 - Cached Intl.NumberFormat
**Learning:** Repeatedly instantiating `Intl.NumberFormat` or using `Number.prototype.toLocaleString` in rendering loops creates a significant performance bottleneck in vanilla JS apps rendering lists.
**Action:** Always cache `Intl.NumberFormat` instances in the global/module scope and reuse them with the `.format()` method.
