## 2024-06-12 - Intl Formatters Instantiation Overhead
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` repeatedly inside formatting functions like `formatCurrency` or within table rendering loops is a significant hidden performance bottleneck in vanilla JS apps, especially on large datasets.
**Action:** Always extract and globally cache `Intl` formatter instances to reuse them across multiple function calls.
