## 2023-10-06 - Intl Formatter Overhead
**Learning:** Repeated instantiation of `Intl` formatters (like `Intl.NumberFormat` and `Intl.DateTimeFormat`) within tight loops or frequently called functions is a massive performance bottleneck, reducing formatting speed by up to ~98%.
**Action:** Always cache `Intl` formatter instances globally and reuse them across the application to avoid re-instantiation overhead on every function call.
