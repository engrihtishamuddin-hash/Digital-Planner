## 2024-03-05 - Intl Formatters Cache Performance
**Learning:** Repeated instantiation of Intl formatters (`Intl.NumberFormat`, `Intl.DateTimeFormat`) natively or via `toLocaleString` methods is a significant performance bottleneck, particularly inside mapped iteration or frequently called utility functions. Testing showed a magnitude speed up by caching the instance objects globally.
**Action:** Always cache Intl formatting instances rather than relying on inline `toLocaleString()` or defining formatters natively within iterating routines.
