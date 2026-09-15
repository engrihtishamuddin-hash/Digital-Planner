## 2024-05-18 - ISO Date String Sorting
**Learning:** Instantiating `new Date()` within an array `sort` callback for ISO formatted date strings (YYYY-MM-DD) is a major performance bottleneck due to continuous object creation and parsing.
**Action:** Always prefer direct lexicographical string comparison (`<`, `>`) when sorting standardized ISO date strings. It is over 10x faster and maintains correct ordering without sacrificing readability.
