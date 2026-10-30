
## 2026-10-30 - [Performance Optimization: Intl Formatters]
**Learning:** In vanilla JS projects like this PWA, instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` dynamically within render loops or frequently called utility functions (like `formatMonth`, `formatCurrency`, `fmtMoney`) creates significant re-instantiation overhead. This also applies implicitly to `.toLocaleString()` and `.toLocaleDateString()`.
**Action:** Always extract and cache instances of these formatters globally to prevent the overhead. Replace `toLocaleString` with explicit calls to a cached `Intl` formatter.
