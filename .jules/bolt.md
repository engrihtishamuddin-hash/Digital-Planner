## 2024-05-24 - Cache Intl Object Instances for Performance
**Learning:** The application repeatedly instantiates `Intl.NumberFormat` and calls `.toLocaleString()` during data rendering. Instantiating `Intl` objects is extremely expensive and can severely block the main thread.
**Action:** Always cache `Intl.NumberFormat` and `Intl.DateTimeFormat` instances outside of rendering loops or frequently called formatting functions.
