## 2024-05-24 - [Date Object Instantiation Bottleneck in Sorts]
**Learning:** Instantiating `new Date()` objects within a tight loop like `.sort()` for comparing strict ISO strings (YYYY-MM-DD) is a significant performance bottleneck in JavaScript, roughly 30x slower than direct string comparison.
**Action:** When working with standardized date formats (like ISO strings), always use direct string comparison (`a < b ? -1 : a > b ? 1 : 0`) instead of parsing them into `Date` objects for sorting purposes.
