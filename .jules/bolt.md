## 2023-11-20 - [Optimize Intl instantiation and date sorting]
**Learning:** Repeatedly instantiating `Intl.DateTimeFormat` or `Intl.NumberFormat` (including implicitly via `.toLocaleString()`) is a significant performance bottleneck, especially within loop iterations or frequent re-renders. Likewise, parsing strings into Date objects for simple sorting is much slower than direct string comparison.
**Action:** Always cache `Intl` formatters globally rather than instantiating them inline. Use direct string comparison for ISO formatted date strings (`YYYY-MM-DD`).
