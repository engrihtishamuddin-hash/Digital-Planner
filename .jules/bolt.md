## 2024-06-25 - Date Sorting Optimization
**Learning:** Instantiating `Date` objects inside a `sort` callback is a massive performance bottleneck, especially as the number of elements grows. Because ISO-8601 date strings (like `YYYY-MM-DD`) are lexicographically sortable, direct string comparison is ~20x faster.
**Action:** Always prefer string comparison for dates when they are known to be in a consistent, sortable format (like ISO strings) to avoid the overhead of `Date` parsing.
