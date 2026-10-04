## 2024-05-24 - Cached Intl Formatters Overhead
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` inside frequently called render loops causes significant performance overhead in JavaScript. In `index.html`, inline instantiation was taking ~7ms for 100 calls, compared to ~0.1ms for cached instances.
**Action:** Always extract and cache `Intl.*` formatter instances outside of formatting functions (like `formatCurrency`, `fmtMoney`, `formatMonth`), especially when they are used inside data rendering loops or table generation.
