## 2024-11-01 - Cache Intl Formatters for Performance
**Learning:** Repeated instantiation of `Intl.NumberFormat` and `Intl.DateTimeFormat` (including implicit calls like `.toLocaleString()` and `.toLocaleDateString()`) creates a significant performance bottleneck, especially when called repeatedly within render loops (e.g., rendering table rows or lists in vanilla JS apps).
**Action:** Always instantiate `Intl` formatters once globally and reuse the cached instances for formatting numbers, currencies, and dates to minimize overhead and improve rendering speed.
