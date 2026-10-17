## 2024-10-17 - [Intl Formatter Instantiation Bottleneck]
**Learning:** Instantiating `Intl.NumberFormat` and `Intl.DateTimeFormat` (or using `toLocaleDateString`/`toLocaleString`) within loops or frequently called rendering functions is a massive performance bottleneck. The overhead of object creation and locale resolution takes ~1s per 10k iterations.
**Action:** Always cache `Intl` formatter instances globally or within closure scope and reuse the `.format()` method, which runs in < 15ms per 10k iterations (~99% faster).
