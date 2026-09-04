## 2024-10-18 - Caching Intl.NumberFormat
**Learning:** `new Intl.NumberFormat` and `.toLocaleString(locale, options)` are surprisingly slow in JavaScript engines due to the overhead of initializing locale data. Calling these inside render loops for lists of items (e.g. expenses, income sources) creates an unnecessary bottleneck.
**Action:** Always cache `Intl.NumberFormat` instances and reuse their `.format()` method when formatting currency or numbers in loops or render functions.
